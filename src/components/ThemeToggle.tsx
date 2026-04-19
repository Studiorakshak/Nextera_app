"use client";

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Initialize state from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply the theme class to the html element whenever isDark changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative flex items-center w-14 h-7 p-1 rounded-full bg-gray-200 dark:bg-neutral-800 transition-colors duration-300 focus:outline-none shadow-inner"
      aria-label="Toggle theme"
    >
      <div 
        className={`
          flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-neutral-200 shadow-md transform transition-transform duration-300
          ${isDark ? 'translate-x-7' : 'translate-x-0'}
        `}
      >
        {isDark ? (
          <Moon size={12} className="text-neutral-900" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;