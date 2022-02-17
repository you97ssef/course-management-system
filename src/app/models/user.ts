export interface User {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  birthday: string;
  role: string; // can be a student or a instructor
}
