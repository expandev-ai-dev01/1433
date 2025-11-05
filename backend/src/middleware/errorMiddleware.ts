import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '@/utils/response';

/**
 * @summary
 * Global error handling middleware for Express application
 *
 * @function errorMiddleware
 * @module middleware
 *
 * @param {Error} error - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {void}
 *
 * @example
 * app.use(errorMiddleware);
 */
export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction): void {
  console.error('Error:', error);

  const statusCode = error.statusCode || 500;
  const message = error.message || 'internalServerError';

  res.status(statusCode).json(errorResponse(message, error.details));
}
