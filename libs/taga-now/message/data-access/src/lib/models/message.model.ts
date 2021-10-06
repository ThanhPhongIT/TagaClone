export interface MessageChat {
  RecipientUserProfileId: number;
  Content: string;
  Type: number;
  Status: number;
  CreatedOn: string;
}
export interface MessageChatCreate {
  AddressDetail: string;
  AddressId: number;
  Description: string;
  Email: string;
  Name: string;
  PhoneNumber: string;
  ShortName: string;
  Status: number;
  Type: number;
}
