import { Cause } from "./cause";

export interface Patient {
  id: number;
  profilePicture: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phoneNumber: string;
  diagnosis: string;
  showButtons: boolean;
  dropdownOption?: string;
  causes?: Cause[];
  selectedOption?: string;
  fontColor?: string;
  showOverlay?: boolean;
}
