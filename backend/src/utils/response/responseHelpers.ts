/**
 * @summary
 * Standard success response format
 *
 * @function successResponse
 * @module utils/response
 *
 * @param {T} data - Response data
 * @param {object} metadata - Optional metadata
 *
 * @returns {object} Formatted success response
 *
 * @example
 * res.json(successResponse(task, { timestamp: new Date().toISOString() }));
 */
export function successResponse<T>(data: T, metadata?: any): object {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @summary
 * Standard error response format
 *
 * @function errorResponse
 * @module utils/response
 *
 * @param {string} message - Error message token
 * @param {any} details - Optional error details
 *
 * @returns {object} Formatted error response
 *
 * @example
 * res.status(400).json(errorResponse('taskNotFound', { id: taskId }));
 */
export function errorResponse(message: string, details?: any): object {
  return {
    success: false,
    error: {
      message,
      details,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @summary
 * Standard list response format with pagination
 *
 * @function listResponse
 * @module utils/response
 *
 * @param {T[]} data - Array of items
 * @param {number} page - Current page number
 * @param {number} pageSize - Items per page
 * @param {number} total - Total number of items
 *
 * @returns {object} Formatted list response
 *
 * @example
 * res.json(listResponse(tasks, 1, 50, 150));
 */
export function listResponse<T>(data: T[], page: number, pageSize: number, total: number): object {
  return {
    success: true,
    data,
    metadata: {
      page,
      pageSize,
      total,
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
      timestamp: new Date().toISOString(),
    },
  };
}
