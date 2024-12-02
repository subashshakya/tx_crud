export interface Transaction {
  id: number;
  createdDate: Date;
  lastModifiedDate: Date;
  description: string;
  remarks: string;
  status: string;
}
