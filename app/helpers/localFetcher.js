import { readFile } from 'fs/promises';
import path from 'path';

const PAGE_SIZE = 9;
const DATA_DIR = path.join(process.cwd(), 'data');

function pathToSlug(pathStr) {
  if (!pathStr) return null;
  const match = pathStr.match(/\/api\/(.+)$/);
  return match ? match[1] : pathStr;
}

export async function getPageDataFromLocal(pathStr) {
  const slug = pathToSlug(pathStr);
  if (!slug) return null;
  const filePath = path.join(DATA_DIR, 'pages', `${slug}.json`);
  try {
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

export async function getCategoriesFromLocal() {
  const filePath = path.join(DATA_DIR, 'categories.json');
  try {
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return { data: [] };
  }
}

export async function getJobListingsFromLocal(searchParams) {
  const params = searchParams ? await searchParams : {};
  const searchString = params.s ?? '';
  const categoryName = params.cat ?? '';
  const pageNumber = Math.max(1, parseInt(params.pn, 10) || 1);

  const filePath = path.join(DATA_DIR, 'job-listings.json');
  let allJobs = [];
  try {
    const content = await readFile(filePath, 'utf-8');
    const parsed = JSON.parse(content);
    allJobs = parsed.data || [];
  } catch {
    return { data: [], meta: { pagination: { page: 1, pageSize: PAGE_SIZE, pageCount: 0, total: 0 } } };
  }

  let filtered = allJobs;

  if (categoryName) {
    filtered = filtered.filter(
      (job) => job.categories?.some((c) => c?.Title === categoryName)
    );
  }

  if (searchString) {
    const lower = searchString.toLowerCase();
    filtered = filtered.filter(
      (job) =>
        (job.Title || '').toLowerCase().includes(lower) ||
        (job.Description || '').toLowerCase().includes(lower) ||
        (job.Location || '').toLowerCase().includes(lower)
    );
  }

  filtered.sort((a, b) => {
    const dateA = new Date(a.publishedAt || 0);
    const dateB = new Date(b.publishedAt || 0);
    return dateB - dateA;
  });

  const total = filtered.length;
  const pageCount = Math.ceil(total / PAGE_SIZE) || 1;
  const start = (pageNumber - 1) * PAGE_SIZE;
  const paginated = filtered.slice(start, start + PAGE_SIZE);

  return {
    data: paginated,
    meta: {
      pagination: {
        page: pageNumber,
        pageSize: PAGE_SIZE,
        pageCount,
        total,
      },
    },
  };
}

export async function getJobListingFromLocal(documentId) {
  const filePath = path.join(DATA_DIR, 'job-listings.json');
  try {
    const content = await readFile(filePath, 'utf-8');
    const parsed = JSON.parse(content);
    const jobs = parsed.data || [];
    const found = jobs.find((j) => j.documentId === documentId);
    return { data: found ? [found] : [] };
  } catch {
    return { data: [] };
  }
}
