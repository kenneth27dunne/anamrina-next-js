import {
  getPageDataFromLocal,
  getCategoriesFromLocal,
  getJobListingsFromLocal,
  getJobListingFromLocal,
} from './localFetcher';
import {
  getStrapiDataFromAPI,
  getCategoriesFromStrapi,
  searchJobListingsFromStrapi,
  getJobListingFromStrapi,
} from './strapiFetcher';

const useLocal = process.env.DATA_SOURCE === 'local';
console.log(`[Data source] Using ${useLocal ? 'local JSON' : 'Strapi API'}`);

export async function getStrapiData(path, options = { cache: 'no-store' }) {
  return useLocal
    ? getPageDataFromLocal(path)
    : getStrapiDataFromAPI(path, options);
}

export async function getJobListingsData(searchParams) {
  if (useLocal) {
    const [categoriesData, jobData] = await Promise.all([
      getCategoriesFromLocal(),
      getJobListingsFromLocal(searchParams),
    ]);
    return { categoriesData, jobData };
  }
  const categoriesData = await getCategoriesFromStrapi();
  const jobData = await searchJobListingsFromStrapi(searchParams);
  return { categoriesData, jobData };
}

export async function getJobListing(documentId) {
  return useLocal
    ? getJobListingFromLocal(documentId)
    : getJobListingFromStrapi(documentId);
}
