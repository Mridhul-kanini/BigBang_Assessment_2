export interface Doctor {
    id: number;
    isToggleOn: boolean;
    firstName: string;
    lastName: string;
    degree: string;
    specialization: string;
    email: string;
    phonenumber: number;
    profilePicture: string;
    approved?: boolean;
  declined?: boolean;
  }
  