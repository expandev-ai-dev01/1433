import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';
import { errorResponse } from '@/utils/response';

/**
 * @summary
 * Middleware factory for request validation using Zod schemas
 *
 * @function validationMiddleware
 * @module middleware
 *
 * @param {ZodSchema} schema - Zod validation schema
 *
 * @returns {Function} Express middleware function
 *
 * @example
 * router.post('/task', validationMiddleware(taskCreateSchema), taskController);
 */
export function validationMiddleware(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json(
          errorResponse('validationError', {
            errors: error.errors.map((err) => ({
              path: err.path.join('.'),
              message: err.message,
            })),
          })
        );
      } else {
        next(error);
      }
    }
  };
}
