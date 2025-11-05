import { clsx } from 'clsx';

export interface ErrorMessageVariantProps {
  variant?: 'error' | 'warning' | 'info';
}

export function getErrorMessageClassName(props: ErrorMessageVariantProps): string {
  const { variant = 'error' } = props;

  return clsx('p-6 rounded-lg', {
    'bg-red-50 text-red-900': variant === 'error',
    'bg-yellow-50 text-yellow-900': variant === 'warning',
    'bg-blue-50 text-blue-900': variant === 'info',
  });
}
