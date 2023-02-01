import toastr from 'toastr';

export const copyToClipboard = (text: string) => {
  (() => {
    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(text);
    }

    const input = document.createElement('input');
    input.value = text;
    document.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  })();
  toastr.success('Text copied to clipboard');
};

export const isEmpty = (data: any) => {
  switch (data?.constructor) {
    case Array:
    case String:
      return !data.length;
    case Object:
      return !Object.keys(data).length;
    case Number:
      return data === 0;
    default:
      return !data;
  }
};

export const optional = (
  value: any,
  transforms: ((...args: any[]) => any)[] = [],
  replacement = 'N/A'
) => {
  if (!value) return replacement;
  let currentValue = value;
  transforms.forEach((fun) => (currentValue = fun(currentValue)));
  return currentValue;
};

export const toReadableAmount = (number: number) => {
  return Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(number || 0);
};

export const toReadableDate = (date: Date | string): string => {
  if (!(date instanceof Date) && typeof date !== 'string') return date;
  return Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date instanceof Date ? date : new Date(date));
};

export const toReadableNumber = (number: number) => {
  return Intl.NumberFormat('en-NG').format(number || 0);
};

export const toReadableTime = (date: Date | string): string => {
  if (!(date instanceof Date) && typeof date !== 'string') return date;
  return Intl.DateTimeFormat('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Africa/Lagos',
  }).format(date instanceof Date ? date : new Date(date));
};

export const truncate = (
  string: string,
  maxLength: number = 30,
  after: string = '...'
) => {
  if (string.length <= maxLength) return string;
  return string.slice(0, maxLength) + after;
};

export const sentenceCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};
