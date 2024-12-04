import React, { useState } from 'react';
import { TitlePageProps } from '../types';

const TitlePage: React.FC<TitlePageProps> = ({ onStartGame }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleStart = () => {
    if (!player1 || !player2) {
      alert('Please enter both player names.');
      return;
    }
    onStartGame(player1, player2);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 space-y-6'>
      <h1 className='text-4xl font-bold'>Welcome to Tic Tac Toe</h1>
      <p className='text-lg text-center max-w-md'>
        Get ready to challenge your friend! Enter your names below and
        press "Start Game" to begin.
      </p>
      <div className='flex flex-col space-y-4'>
        <input
          type='text'
          placeholder='Player 1 Name'
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
          className='w-64 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
        />
        <input
          type='text'
          placeholder='Player 2 Name'
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
          className='w-64 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
        />
      </div>
      <button
        onClick={handleStart}
        className='px-6 py-2 bg-blue-500 dark:bg-blue-700 text-white font-bold rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition'>
        Start Game
      </button>
    </div>
  );
};

export default TitlePage;
