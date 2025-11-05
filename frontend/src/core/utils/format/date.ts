import { format, formatDistance, formatRelative, isValid, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * @utility formatDate
 * @summary Formats a date to a specific format
 * @category date-formatting
 */
export const formatDate = (date: Date | string, formatStr: string = 'dd/MM/yyyy'): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';
    return format(dateObj, formatStr, { locale: ptBR });
  } catch (error: unknown) {
    console.error('Error formatting date:', error);
    return '';
  }
};

/**
 * @utility formatDateTime
 * @summary Formats a date with time
 */
export const formatDateTime = (date: Date | string): string => {
  return formatDate(date, 'dd/MM/yyyy HH:mm');
};

/**
 * @utility formatRelativeDate
 * @summary Formats a date relative to now (e.g., "2 days ago")
 */
export const formatRelativeDate = (date: Date | string): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';
    return formatDistance(dateObj, new Date(), { addSuffix: true, locale: ptBR });
  } catch (error: unknown) {
    console.error('Error formatting relative date:', error);
    return '';
  }
};

/**
 * @utility formatRelativeDateTime
 * @summary Formats a date relative to a base date
 */
export const formatRelativeDateTime = (
  date: Date | string,
  baseDate: Date = new Date()
): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';
    return formatRelative(dateObj, baseDate, { locale: ptBR });
  } catch (error: unknown) {
    console.error('Error formatting relative datetime:', error);
    return '';
  }
};
