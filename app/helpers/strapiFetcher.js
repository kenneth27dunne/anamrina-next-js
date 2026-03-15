import qs from 'qs';
import { noCache } from './consts';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const PAGE_SIZE = 9;

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

export async function getStrapiDataFromAPI(path, options = { cache: 'no-store' }) {
  const url = new URL(path, BASE_URL);
  url.search = pageQuery;
  try {
    const response = await fetch(url.href, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getCategoriesFromStrapi() {
  const categoriesRes = await fetch(BASE_URL + '/api/categories', {
    next: { revalidate: 6600 },
  });
  return categoriesRes.json();
}

export async function searchJobListingsFromStrapi(searchParams) {
  const params = searchParams ? await searchParams : {};
  const searchString = params.s ?? '';
  const categoryName = params.cat ?? '';
  const pageNumber = params.pn ?? 1;

  const query = qs.stringify(
    {
      populate: {
        CompanyLogo: { populate: '*' },
        categories: true,
      },
      filters: {
        $and: [
          { categories: { Title: { $eq: categoryName } } },
          {
            $or: [
              { Title: { $containsi: searchString } },
              { Description: { $containsi: searchString } },
              { Location: { $containsi: searchString } },
            ],
          },
        ],
      },
      fields: ['Title', 'Company', 'Location', 'Description'],
      pagination: { pageSize: PAGE_SIZE, page: pageNumber },
      sort: ['publishedAt:desc'],
    },
    { encodeValuesOnly: true }
  );

  const url = new URL('/api/job-listings', BASE_URL);
  url.search = query;
  const jobsRes = await fetch(url.href, noCache);
  return jobsRes.json();
}

export async function getJobListingFromStrapi(documentId) {
  const query = qs.stringify(
    {
      populate: {
        CompanyLogo: { populate: '*' },
        categories: true,
      },
      filters: { documentId: { $eq: documentId } },
    },
    { encodeValuesOnly: true }
  );

  const url = new URL('/api/job-listings', BASE_URL);
  url.search = query;
  const jobsRes = await fetch(url.href, noCache);
  return jobsRes.json();
}
