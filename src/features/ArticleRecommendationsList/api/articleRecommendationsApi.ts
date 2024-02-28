import { rtkApi } from "shared/api/rtkApi";

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    //get articles
    getArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: "/articles",
        params: {
          _limit: limit,
        },
      }),
    }),
    // //create article (POST)
    // createArticleRecommendation: build.mutation({
    //   //mutation for POST and PUT
    //   query: (limit) => ({
    //     url: "/articles",
    //     params: {
    //       _limit: limit,
    //     },
    //     method: "POST", // "PUT"
    //   }),
    // }),
  }),
});

export const useArticleRecommendationsList =
  recommendationsApi.useGetArticleRecommendationsListQuery;
// export const useArticleCreation =
//   recommendationsApi.useCreateArticleRecommendationMutation;
