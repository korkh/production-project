import { rtkApi } from "@/shared/api/rtkApi";

const <FTName>Api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    //get articles
    get<FTName % capitilize>List: build.query<Article[], number>({ // Article[] is what we expecting to return, number is passing arg (number of articles to return)
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

export const use<FTName % capitilize>List =
  recommendationsApi.useGet<FTName % capitilize>ListQuery;
// export const useArticleCreation =
//   recommendationsApi.useCreateArticleRecommendationMutation;
