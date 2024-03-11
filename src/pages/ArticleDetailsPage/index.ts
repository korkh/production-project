export type { ArticleDetailsPageSchema } from "./model/types/index";
export { ArticleDetailsPageAsync as ArticleDetailsPage } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";
export type { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema";

//Reducers
export { addCommentFormReducer } from "@/features/addCommentForm/model/slice/addCommentFormSlice";
export { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
export { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";

export { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
export { articleDetailsPageReducer } from "./model/slices";
