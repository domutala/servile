export interface MFileParams {
  data: string;
  name?: string;
  type: string;
  extras?: any;
}

export interface MFile {
  id: string;
  params: MFileParams;
  createdAt: Date;
  updatedAt: Date;
}
