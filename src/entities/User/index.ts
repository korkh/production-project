export { saveJsonSettings } from "./model/services/saveJsonSettings";

export {
  isUserAdmin,
  isUserManager,
  getUserRoles,
} from "./model/selectors/roleSelector";

export { userReducer, userActions } from "./model/slice/userSlice";
//Selectors
export { getUserInited } from "./model/selectors/getUserInited/getUserInited";
export { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
export { useJsonSettings } from "./model/selectors/jsonSettings";

//Entitites
export type { UserSchema, User } from "./model/types/user";
export { UserRole } from "./model/consts/UserRole";
