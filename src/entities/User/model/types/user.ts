export interface User {
  id: string;
  username: string;
  avatar?: string;
}

// interface for state
export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
