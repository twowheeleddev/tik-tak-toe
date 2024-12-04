import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TitlePage from '../components/TitlePage';
import Board from '../components/Board';
import About from '../components/About';
import Settings from '../components/Settings';

const RoutesConfig: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState({
    player1: '',
    player2: '',
  });

  const handleStartGame = (player1: string, player2: string) => {
    setPlayers({ player1, player2 });
    setGameStarted(true);
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
          gameStarted ? (
            <Board
              player1={players.player1}
              player2={players.player2}
            />
          ) : (
            <div className='flex items-center justify-center h-full'>
              <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
                Please start the game from the home page.
              </h1>
            </div>
          )
        }
      />
      <Route
        path='/about'
        element={<About />}
      />
      <Route
        path='/settings'
        element={<Settings />}
      />
    </Routes>
  );
};

export default RoutesConfig;
