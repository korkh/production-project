export interface User {
  id: string;
  username: string;
}

// interface for state
export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
