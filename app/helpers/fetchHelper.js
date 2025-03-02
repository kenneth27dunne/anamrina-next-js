import qs from 'qs';
import { noCache } from '../helpers/consts'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const pageQuery = qs.stringify({
  populate: {
    HeroSection: {
      populate: {
        CTA: {
          populate: true
        }
      }
    },
    Blocks: {
      on: {
        'layout.grid-image-cards': {
          populate: '*'
        },
        'layout.info-card-block': {
          populate: '*'
        },
        'layout.feature-block': {
          populate: '*'
        },
        'layout.service-block': {
          populate: {
            Services: {
              populate: '*'
            }
          }
        },
        'layout.contact-form': {
          populate: '*'
        },
        'layout.testimonial-block': {
          populate: {
            testimonials: {
              populate: '*'
            }
          }
        },
        'layout.feature2-block': {
          populate: '*'
        },
        'component.job-listing': {
          populate: '*'
        }
      }
    }
  },  
  encodeValuesOnly: true,
});

export async function getStrapiData(path, options = { cache: 'no-store' }) {  
  const url = new URL(path, BASE_URL);
  url.search = pageQuery;

  try {
    const response = await fetch(url.href, options);
    const data = await response.json();
    
    return data;
  } catch (err) {
    console.error(err)
  }
}

export async function getJobListingsData(searchParams){  
  const categoriesRes = await fetch(BASE_URL + '/api/categories', { next: { revalidate: 6600 }});
  const categoriesData = await categoriesRes.json();
  
  const jobData = await searchJobListings(searchParams);
  return { categoriesData, jobData }
}

export async function searchJobListings(searchParams) {
  console.log("searchJobListings", searchParams.s)

  let searchString = searchParams? searchParams.s  : "";
  let categoryId = searchParams? searchParams.cat : "";
  let pageNumber = searchParams? searchParams.pn ?? 1 : 1 ;
  
  const query = qs.stringify({
    populate: {
      CompanyLogo: {
        populate: '*'
      }
    },
    filters: {
      $or: [
        {
          Title: {
            $containsi: searchString,
          },
        },
        {
          Description: {
            $containsi: searchString,
          },
        },
        {
          Location: {
            $containsi: searchString,
          },
        },
      ],
    },
    fields: ['Title', 'Location', 'Description'],  
    pagination: {
      pageSize: 2,
      page: pageNumber,
    },
    encodeValuesOnly: true,
  });

  const url = new URL('/api/job-listings', BASE_URL);
  url.search = query;
  
  const jobsRes = await fetch(url.href, noCache);
  const jobData = await jobsRes.json();

  console.log(jobData)
  return jobData;
}