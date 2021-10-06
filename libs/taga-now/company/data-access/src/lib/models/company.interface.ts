export interface Company {
  AddressDetail: string;
  AddressId: number;
  CompanyId: number;
  CreatedBy: number;
  CreatedOn: string;
  Description: string;
  DistrictId: number;
  Email: string;
  MediaURL: string;
  Name: string;
  NationId: number;
  PhoneNumber: string;
  ProvinceId: number;
  ShortName: string;
  Status: number;
  Type: number;
  UpdatedBy: string;
  UpdatedOn: string;
}

export interface CompanyCreate {
  // AddressDetail: string;
  // AddressId: number;
  // Description: string;
  // Email: string;
  Name: string;
  // PhoneNumber: string;
  // ShortName: string;
  // Status: number;
  // Type: number;
}
