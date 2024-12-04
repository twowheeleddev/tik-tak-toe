import React from 'react';
import { motion } from 'framer-motion';
import { SquareProps } from '../types';

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  const animationVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <button
      onClick={onClick}
      className='w-full h-full flex items-center justify-center 
                 text-5xl font-bold border bg-white dark:bg-gray-700 
                 dark:text-white text-gray-800'>
      {value && (
        <motion.div
          initial='hidden'
          animate='visible'
          variants={animationVariants}
          className='w-full h-full flex items-center justify-center'>
          {value === 'X' ? (
            <motion.svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-3/4 h-3/4 text-blue-500'>
              <line
                x1='18'
                y1='6'
                x2='6'
                y2='18'
              />
              <line
                x1='6'
                y1='6'
                x2='18'
                y2='18'
              />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-3/4 h-3/4 text-red-500'>
              <circle
                cx='12'
                cy='12'
                r='9'
              />
            </motion.svg>
          )}
        </motion.div>
      )}
    </button>
  );
};

export default Square;
