import React, { useState } from 'react';

type TitlePageProps = {
  onStartGame: (player1: string, player2: string) => void;
};

const TitlePage: React.FC<TitlePageProps> = ({ onStartGame }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleStart = () => {
    if (!player1.trim() || !player2.trim()) {
      alert('Please enter valid names for both players.');
      return;
    }
    onStartGame(player1.trim(), player2.trim());
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 space-y-8'>
      <h1 className='text-5xl font-bold'>Welcome to Tic Tac Toe</h1>
      <div className='flex flex-col space-y-4 w-64'>
        <input
          type='text'
          placeholder='Player 1 Name'
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
          className='px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='text'
          placeholder='Player 2 Name'
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
          className='px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <button
        onClick={handleStart}
        className='px-8 py-3 bg-blue-500 dark:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
        Start Game
      </button>
    </div>
  );
};

export default TitlePage;
