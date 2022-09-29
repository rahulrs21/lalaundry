// npm i next-sanity https://www.npmjs.com/package/next-sanity https://www.youtube.com/watch?v=6fNy0iD3hsk[47:30]

import {createCurrentUserHook, createClient} from 'next-sanity'

import createImageUrlBuilder from '@sanity/image-url'

// lib/config.js  https://www.npmjs.com/package/next-sanity#live-real-time-preview
export const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === 'production',
  
    /**
     * OPTIONAL config to enable authentication with custom token
     * You might need this if you host the preview on a different url than Sanity Studio
    //  */
    // token: '<sanity access token>',
    // EventSource: /* provide your own event source implementation. Required in browsers to support the above token parameter. */
}




export const sanityClient = createClient(config);
// set up the client for fetching data in getProps() page functions

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

 // Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)