export interface UserType {
  id?: number;
  name: string;
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  userType: UserType;
}
