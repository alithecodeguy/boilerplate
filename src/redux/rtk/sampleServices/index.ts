// api
import { emptySplitApi } from '../emptySplitApi';

// types
import type { SampleDataInterface } from './sampleServicesTypes';

export const sampleSubApi = emptySplitApi
  .enhanceEndpoints({
    addTagTypes: ['sample-tag']
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // sample/endpoint
      sampleEndPoint: builder.query<SampleDataInterface, null>({
        query: () => 'sample/endpoint',
        // transformResponse: (response: ApiResponseInterface<SampleDataInterface>) =>
        //   response.data.data,
        providesTags: ['sample-tag']
      })
    }),
    overrideExisting: false
  });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSampleEndPointQuery } = sampleSubApi;
