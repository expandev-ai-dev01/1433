/**
 * @type ApiResponse
 * @summary Standard API response structure
 */
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * @type PaginatedResponse
 * @summary Paginated API response structure
 */
export interface PaginatedResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/**
 * @type ApiError
 * @summary Standard API error structure
 */
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
  details?: any;
}
