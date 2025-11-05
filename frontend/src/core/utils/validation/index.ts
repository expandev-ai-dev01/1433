/**
 * @utility isValidEmail
 * @summary Validates email format
 * @category validation
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * @utility isValidUrl
 * @summary Validates URL format
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (error: unknown) {
    return false;
  }
};
