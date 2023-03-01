import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

/**
 * It takes a date and returns a formatted date string.
 * @param {any} date - any - The date you want to format.
 * @param {'numeric' | 'alphabetic'} [type=alphabetic] - 'numeric' | 'alphabetic' = 'alphabetic'
 * @returns A function that takes two parameters, date and type.
 */

export const formatDate = (date, type) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const newDate = typeof date === 'string' ? new Date(date) : date;
  if (type === 'numeric')
    return ''
      .concat(newDate.getDate(), '/')
      .concat(newDate.getMonth(), '/')
      .concat(newDate.getFullYear());
  return ''
    .concat(newDate.getDate(), ' ')
    .concat(months[newDate.getMonth()], ' ')
    .concat(newDate.getFullYear());
};

/**
 * It returns the first part of the URL pathname.
 * @returns The pathname of the current route.
 */

export const getPath = () => {
  const router = useRouter();
  return router.pathname.split('/')[1];
};

/**
 * It insert spaces on a word where Pascal convention is used, for example: quickBrown -> quick brown
 * @param {string} string - The string to insert spaces into.
 * @returns A function that takes a string and returns a string.
 */

export const insertSpaces = (string) => {
  string.replace(/([a-z])([A-Z])/g, '$1 $2');
  string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  return string;
};

/**
 * It takes a string, converts it to a buffer, and then converts the buffer to a base64 string
 * @param {string} str - The string to be converted to base64.
 * @returns A string
 */

export function stringToBase64(str) {
  return Buffer.from(str).toString('base64');
}

export function base64ToString(str) {
  return Buffer.from(str).toString('utf-8');
}

/**
 * If you want to use the toast function, you must pass in a string as a parameter.
 * @param {string} message - string - The message to be displayed in the toast.
 */

export const successToast = (message) => {
  toast.success(message || 'Task successfully completed');
};
export const errorToast = (message) => {
  toast.error(message || 'Oops! Something went wrong!');
};
export const loadingToast = (message) => {
  toast.loading(message || 'Wait! Task is in progress');
};

/**
 * It generates a random string of characters of a specified length.
 * @param {number} length - number - The length of the generated ID.
 * @returns A string of random characters.
 */

export function generateId(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const timerHelper = (time) => {
  const formatText = (item) => String(item).padStart(2, '0');
  const nrHours = formatText(Math.floor(time / 1000 / 60 / 60) % 24);
  const nrMin = formatText(Math.floor(time / 1000 / 60) % 60);
  const nrSec = formatText(Math.floor(time / 1000) % 60);
  return `${nrHours} : ${nrMin} : ${nrSec}`;
};
