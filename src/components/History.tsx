import React from 'react';
import { Link } from 'react-router-dom';

type GameResult = {
  id: number;
  board: string[];
  winner: string | null;
  winningLine: number[] | null;
};

type HistoryProps = {
  gameHistory: GameResult[];
};

const History: React.FC<HistoryProps> = ({ gameHistory }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6'>
      <h1 className='text-4xl font-bold mb-8'>
        {gameHistory.length > 0
          ? 'Game History'
          : 'No Games Played Yet'}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {gameHistory.map(game => (
          <Link
            to={`/history/${game.id}`}
            key={game.id}
            className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition'>
            <div className='grid grid-cols-3 gap-1'>
              {game.board.map((value, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 flex items-center justify-center border ${
                    game.winningLine?.includes(index)
                      ? 'bg-green-200 dark:bg-green-800'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                  {value}
                </div>
              ))}
            </div>
            <p className='mt-4 text-center'>
              Winner: {game.winner ? game.winner : 'Draw'}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default History;
