export interface User {
  id: number;
  firstName: string;
  lastName: string;
  degree?: string;
  specialization?: string;
  age?: number;
  gender?: string;
  diagnosis?: string;
  email: string;
  password: string;
  phoneNumber: string;
  profilePicture: string;
  country?: string;
  address?: string;
  status?: string;
  role: string;
}
