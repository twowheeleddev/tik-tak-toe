import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-gray-100 dark:bg-gray-900 p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
          Tic Tac Toe
        </h1>
        <ul className='flex space-x-6'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? 'text-blue-500 dark:text-blue-400 font-semibold'
                    : 'text-gray-900 dark:text-gray-100 hover:text-blue-500'
                }`
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/history'
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? 'text-blue-500 dark:text-blue-400 font-semibold'
                    : 'text-gray-900 dark:text-gray-100 hover:text-blue-500'
                }`
              }>
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? 'text-blue-500 dark:text-blue-400 font-semibold'
                    : 'text-gray-900 dark:text-gray-100 hover:text-blue-500'
                }`
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/settings'
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? 'text-blue-500 dark:text-blue-400 font-semibold'
                    : 'text-gray-900 dark:text-gray-100 hover:text-blue-500'
                }`
              }>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
