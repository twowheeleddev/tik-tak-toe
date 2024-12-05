import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TitlePage from '../components/TitlePage';
import GameBoard from '../components/GameBoard';
import Settings from '../components/Settings';
import History from '../components/History';
import { GameResult } from '../types';

const RoutesConfig: React.FC = () => {
  const navigate = useNavigate();

  const [currentPlayers, setCurrentPlayers] = useState({
    player1: '',
    player2: '',
  });

  const [gameHistory, setGameHistory] = useState<GameResult[]>([]);

  const handleStartGame = (player1: string, player2: string) => {
    setCurrentPlayers({ player1, player2 });
    navigate('/game');
  };

  const handleGameEnd = (board: string[], winner: string | null) => {
    const winningLine = calculateWinningLine(board); // Calculate winning line
    setGameHistory(prev => [
      ...prev,
      {
        id: Date.now(),
        board,
        winner,
        players: currentPlayers,
        winningLine, // Matches the `GameResult` type
      },
    ]);
  };

  return (
    <Routes>
      <Route
        path='/'
        element={<TitlePage onStartGame={handleStartGame} />}
      />
      <Route
        path='/game'
        element={
          <GameBoard
            player1={currentPlayers.player1}
            player2={currentPlayers.player2}
            onGameEnd={handleGameEnd}
            onPlayAgain={() => navigate('/game')}
            onReturnHome={() => navigate('/')}
          />
        }
      />
      <Route
        path='/settings'
        element={<Settings />}
      />
      <Route
        path='/history'
        element={<History gameHistory={gameHistory} />}
      />
    </Routes>
  );
};

// Helper function to calculate the winning line
const calculateWinningLine = (squares: string[]): number[] | null => {
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
      return [a, b, c];
    }
  }
  return null;
};

export default RoutesConfig;
