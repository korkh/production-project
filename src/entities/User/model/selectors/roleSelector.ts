import { StateSchema } from "@/app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";
import { UserRole } from "../consts/UserRole";

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

//using reselect we wemoise list of roles and then inside will check if userAdmin or not
export const isUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN))
);
export const isUserManager = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.MANAGER))
);
