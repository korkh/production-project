import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileData } from "@/features/editableProfileCard/model/selectors/getProfileData/getProfileData";

import { useSelector } from "react-redux";
import { getUserAuthData } from "../getUserAuthData/getUserAuthData";

// Selector functions
const selectAuthData = (state: StateSchema) => getUserAuthData(state);
const selectProfileData = (state: StateSchema) => getProfileData(state);

// Memoized selector to compute editing rights
const selectCanEdit = createDraftSafeSelector(
  [selectAuthData, selectProfileData],
  (authData, profileData) => {
    if (authData && profileData) {
      // Check if both authData and profileData are available
      // Return true if IDs match, false otherwise
      return authData.id === profileData.id;
    }
    return false; // if null or undefined
  }
);

export const useGetEditRight = () => {
  const canEdit = useSelector(selectCanEdit); // Use the memoized selector

  return canEdit;
};
