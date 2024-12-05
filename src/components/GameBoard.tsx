import React, { useState } from 'react';
import Square from './Square';

type GameBoardProps = {
  player1: string;
  player2: string;
  onGameEnd: (board: string[], winner: string | null) => void;
  onPlayAgain: () => void;
  onReturnHome: () => void;
};

const GameBoard: React.FC<GameBoardProps> = ({
  player1,
  player2,
  onGameEnd,
  onPlayAgain,
  onReturnHome,
}) => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const winner = calculateWinner(squares);

  const handleClick = (index: number) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleGameOver = () => {
    onGameEnd(squares, winner);
  };

  if (winner || squares.every(square => square)) {
    handleGameOver();
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-6'>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-200'>
        {winner
          ? `🎉 Winner: ${winner}`
          : squares.every(square => square)
          ? "It's a Draw!"
          : `Next Turn: ${isXNext ? player1 : player2} (${
              isXNext ? 'X' : 'O'
            })`}
      </h1>
      <div
        className='grid grid-cols-3 gap-4 p-8 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg'
        style={{
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
        }}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {(winner || squares.every(square => square)) && (
        <div className='flex space-x-4'>
          <button
            onClick={onPlayAgain}
            className='px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition'>
            Play Again
          </button>
          <button
            onClick={onReturnHome}
            className='px-4 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition'>
            Return Home
          </button>
        </div>
      )}
    </div>
  );
};

const calculateWinner = (squares: string[]): string | null => {
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

export default GameBoard;
