export interface MockUser {
  id: string;
  legalName: string;
  relationship: string;
  currentLocation: string;
  occupation: string;
  isFlaggedScammer: boolean;
}

export const mockUserAli: MockUser = {
  id: "user_ali",
  legalName: "Ali bin Ahmad",
  relationship: "Grandson",
  currentLocation: "Kuala Lumpur, Malaysia",
  occupation: "Student",
  isFlaggedScammer: false,
};
