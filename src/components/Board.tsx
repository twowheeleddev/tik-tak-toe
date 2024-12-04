import React, { useState } from 'react';
import Square from './Square';
import { BoardProps } from '../types';

const Board: React.FC<BoardProps> = ({ player1, player2 }) => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const currentPlayer = isXNext ? player1 : player2;

  // Styles for the game board
  const boardStyle: React.CSSProperties = {
    width: 'min(500px, 90vw)',
    height: 'min(500px, 90vw)',
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-6'>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-200'>
        {winner
          ? `🎉 Winner: ${winner}`
          : `Next Turn: ${currentPlayer} (${isXNext ? 'X' : 'O'})`}
      </h1>
      <div
        className='grid grid-cols-3 gap-4 p-8 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg'
        style={boardStyle} // Apply dynamic styles here
      >
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
