const fs = require('fs');
const path = require('path');
const qs = require('qs');

const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach((line) => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      process.env[key] = value;
    }
  });
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!BASE_URL) {
  console.error('NEXT_PUBLIC_BASE_URL is required. Set it in .env.local or as an env var.');
  process.exit(1);
}

const PAGE_SLUGS = [
  'home-page',
  'about-page',
  'contact-page',
  'service-page',
  'employer-page',
  'job-seekers-page',
  'how-it-works-page',
];

const pageQuery = qs.stringify({
  populate: {
    HeroSection: {
      populate: {
        CTA: { populate: true },
      },
    },
    Blocks: {
      on: {
        'layout.grid-image-cards': { populate: { Cards: { populate: '*' } } },
        'layout.info-card-block': { populate: '*' },
        'layout.feature-block': { populate: '*' },
        'layout.service-block': { populate: { Services: { populate: '*' } } },
        'layout.contact-form': { populate: '*' },
        'layout.testimonial-block': { populate: { testimonials: { populate: '*' } } },
        'layout.feature2-block': { populate: '*' },
        'component.job-listing': { populate: '*' },
      },
    },
  },
  encodeValuesOnly: true,
});

function makeAbsoluteUrls(obj, baseUrl) {
  if (!obj) return obj;
  if (typeof obj === 'string') return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => makeAbsoluteUrls(item, baseUrl));
  }
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'url' && typeof value === 'string' && value && !value.startsWith('http')) {
      result[key] = value.startsWith('/') ? baseUrl + value : baseUrl + '/' + value;
    } else if (key === 'formats' && value && typeof value === 'object') {
      result[key] = makeAbsoluteUrls(value, baseUrl);
    } else {
      result[key] = makeAbsoluteUrls(value, baseUrl);
    }
  }
  return result;
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${url}`);
  return res.json();
}

async function exportPages() {
  const dataDir = path.join(process.cwd(), 'data', 'pages');
  fs.mkdirSync(dataDir, { recursive: true });

  for (const slug of PAGE_SLUGS) {
    const url = `${BASE_URL}/api/${slug}?${pageQuery}`;
    console.log(`Fetching ${slug}...`);
    try {
      const data = await fetchJson(url);
      const transformed = makeAbsoluteUrls(data, BASE_URL);
      fs.writeFileSync(
        path.join(dataDir, `${slug}.json`),
        JSON.stringify(transformed, null, 2)
      );
    } catch (err) {
      console.warn(`Skipping ${slug}: ${err.message}`);
    }
  }
  console.log('Pages exported.');
}

async function exportCategories() {
  const url = `${BASE_URL}/api/categories`;
  console.log('Fetching categories...');
  const data = await fetchJson(url);
  const transformed = makeAbsoluteUrls(data, BASE_URL);
  const dataDir = path.join(process.cwd(), 'data');
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(path.join(dataDir, 'categories.json'), JSON.stringify(transformed, null, 2));
  console.log('Categories exported.');
}

async function exportJobListings() {
  const allJobs = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const query = qs.stringify({
      populate: {
        CompanyLogo: { populate: '*' },
        categories: true,
      },
      pagination: { pageSize: 100, page },
      sort: ['publishedAt:desc'],
    }, { encodeValuesOnly: true });
    const url = `${BASE_URL}/api/job-listings?${query}`;
    console.log(`Fetching job listings page ${page}...`);
    const res = await fetchJson(url);
    const jobs = res.data || [];
    allJobs.push(...jobs);
    const meta = res.meta?.pagination;
    hasMore = meta && meta.page < meta.pageCount;
    page++;
  }

  const transformed = makeAbsoluteUrls({ data: allJobs, meta: { total: allJobs.length } }, BASE_URL);
  const dataDir = path.join(process.cwd(), 'data');
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(
    path.join(dataDir, 'job-listings.json'),
    JSON.stringify(transformed, null, 2)
  );
  console.log(`Job listings exported (${allJobs.length} jobs).`);
}

async function main() {
  console.log('Exporting Strapi data to data/...');
  await exportPages();
  await exportCategories();
  await exportJobListings();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
