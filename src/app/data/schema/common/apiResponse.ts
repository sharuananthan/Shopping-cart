export type ApiResponse<T> ={
    data: T;
    status: string;
    message: string;
    totalElements: number;
    totalPages: number;
  }
  