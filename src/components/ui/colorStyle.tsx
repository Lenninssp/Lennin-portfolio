import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeStyles {
  light: string;
  dark: string;
}

interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  style: string;
}

const themeStyles: ThemeStyles = {
  light: 'bg-gray-100 border border-gray-300',
  dark: 'bg-gray-800 border border-gray-700'
};

const useMyTheme = (): UseThemeReturn => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [style, setStyle] = useState<string>(themeStyles.dark);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (typeof window !== "undefined") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }
  }, []);

  useEffect(() => {
    setStyle(themeStyles[theme]);
    
    localStorage.setItem('theme', theme);
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return { theme, setTheme: changeTheme, style };
};

export default useMyTheme;