import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const Settings: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleResetGame = () => {
    // Logic to reset the game (placeholder for actual implementation)
    alert('Game state has been reset!');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 space-y-8'>
      {/* Page Title */}
      <h1 className='text-4xl font-bold'>Settings</h1>

      {/* Theme Toggle Section */}
      <div className='flex flex-col items-center space-y-4'>
        <h2 className='text-2xl font-semibold'>Theme</h2>
        <p className='text-lg'>
          Current Theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </p>
        <button
          onClick={toggleTheme}
          className='px-6 py-2 bg-blue-500 dark:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
          {isDarkMode
            ? 'Switch to Light Mode'
            : 'Switch to Dark Mode'}
        </button>
      </div>

      {/* Game Preferences Section */}
      <div className='flex flex-col items-center space-y-4'>
        <h2 className='text-2xl font-semibold'>Game Preferences</h2>
        <label
          htmlFor='iconSelect'
          className='text-lg'>
          Select Player Icons
        </label>
        <select
          id='iconSelect'
          className='px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'>
          <option value='default'>X and O (Default)</option>
          <option value='hearts'>❤️ and 💙</option>
          <option value='stars'>⭐ and 🌟</option>
        </select>
      </div>

      {/* Reset Game Section */}
      <div className='flex flex-col items-center space-y-4'>
        <h2 className='text-2xl font-semibold'>Reset</h2>
        <button
          onClick={handleResetGame}
          className='px-6 py-2 bg-red-500 dark:bg-red-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Settings;
