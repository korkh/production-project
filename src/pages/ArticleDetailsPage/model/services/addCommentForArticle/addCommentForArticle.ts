import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { IComment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { fetchCommentsByArticleId } from "./../fetchCommentsByArticleId.ts/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  IComment,
  string,
  ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  // text from input
  if (!userData || !text || !article) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<IComment>("/comments", {
      articleId: article.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    // we need to clean input after placing Comment
    // dispatch(addCommentFormActions.setText("")); or
    dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
