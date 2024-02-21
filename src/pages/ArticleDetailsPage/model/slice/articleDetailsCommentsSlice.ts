import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";
import { IComment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId.ts/fetchCommentsByArticleId";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

// data normalization
const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id,
});

// selector from adapter by that we will get comments
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
  // getInitialState returns default state
);

const inititalState: ArticleDetailsCommentsSchema = {
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
};

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsCommentsSlice",
  initialState:
    commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
      inititalState
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<IComment[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
