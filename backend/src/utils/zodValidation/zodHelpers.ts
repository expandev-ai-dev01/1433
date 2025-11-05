import { z } from 'zod';

/**
 * @summary
 * Common Zod validation helpers for consistent data validation
 *
 * @module utils/zodValidation
 */

/**
 * @remarks String validation with max length
 */
export const zString = z.string().min(1);

/**
 * @remarks Nullable string with max length
 */
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @remarks Name field validation (1-200 characters)
 */
export const zName = z.string().min(1).max(200);

/**
 * @remarks Description field validation (max 500 characters)
 */
export const zDescription = z.string().max(500);

/**
 * @remarks Nullable description field
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @remarks Foreign key validation (positive integer)
 */
export const zFK = z.number().int().positive();

/**
 * @remarks Nullable foreign key
 */
export const zNullableFK = z.number().int().positive().nullable();

/**
 * @remarks BIT field validation (0 or 1)
 */
export const zBit = z.number().int().min(0).max(1);

/**
 * @remarks Date string validation (ISO format)
 */
export const zDateString = z.string().datetime();

/**
 * @remarks Nullable date string
 */
export const zNullableDateString = z.string().datetime().nullable();

/**
 * @remarks Email validation
 */
export const zEmail = z.string().email();

/**
 * @remarks Positive number validation
 */
export const zPositiveNumber = z.number().positive();

/**
 * @remarks Non-negative number validation
 */
export const zNonNegativeNumber = z.number().min(0);
