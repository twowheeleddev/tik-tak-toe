import React from 'react';
import { useParams } from 'react-router-dom';

type GameResult = {
  id: number;
  board: string[];
  winner: string | null;
  winningLine: number[] | null;
};

type SingleGameProps = {
  gameHistory: GameResult[];
};

const SingleGame: React.FC<SingleGameProps> = ({ gameHistory }) => {
  const { id } = useParams<{ id: string }>();
  const game = gameHistory.find(
    game => game.id === parseInt(id || '', 10)
  );

  if (!game) {
    return (
      <div className='flex items-center justify-center h-screen text-gray-900 dark:text-gray-100'>
        <h1 className='text-3xl font-bold'>Game not found</h1>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6'>
      <h1 className='text-4xl font-bold mb-8'>Game Details</h1>
      <div className='grid grid-cols-3 gap-1'>
        {game.board.map((value, index) => (
          <div
            key={index}
            className={`w-20 h-20 flex items-center justify-center border ${
              game.winningLine?.includes(index)
                ? 'bg-green-200 dark:bg-green-800'
                : 'bg-gray-100 dark:bg-gray-700'
            }`}>
            {value}
          </div>
        ))}
      </div>
      <p className='mt-4 text-center text-2xl'>
        Winner: {game.winner ? game.winner : 'Draw'}
      </p>
    </div>
  );
};

export default SingleGame;
