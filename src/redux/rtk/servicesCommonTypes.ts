export interface ApiResponseInterface<T> {
  data: {
    data: T;
    statusCode: number;
  };
}

export interface ErrorResponseInterface {
  data: {
    error: {
      code: number;
      statusCode: number;
      description: string;
      dictionaryDescription: string;
      stackTrace: string;
    };
  };
}

export interface PaginationInterface {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  hasPrevious: boolean;
  hasNext: boolean;
}
