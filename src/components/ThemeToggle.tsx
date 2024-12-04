// Toggle button to switch themes
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded'>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
