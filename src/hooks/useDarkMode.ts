import { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

export const useTheme = (initialState = false) => {
  const { toggle, value } = useDarkMode(initialState, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });

  useEffect(() => {
    const proseEl = document.querySelector('article.prose');

    if (!proseEl) {
      return;
    }

    if (value) {
      document?.querySelector('article.prose')?.classList.add('prose-dark');
    } else {
      document?.querySelector('article.prose')?.classList.remove('prose-dark');
    }
  }, [value]);

  return { toggle, darkMode: value };
};
