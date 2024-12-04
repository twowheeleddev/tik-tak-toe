import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';
import TitlePage from './components/TitlePage';
import Board from './components/Board';

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState<Players>({
    player1: '',
    player2: '',
  });

  const handleStartGame = (player1: string, player2: string) => {
    // Update players and set gameStarted to true
    setPlayers({ player1, player2 });
    setGameStarted(true);
  };

  return (
    <ThemeProvider>
      <Router>
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <div className='h-screen bg-white dark:bg-gray-900'>
          <Routes>
            <Route
              path='/'
              element={
                <TitlePage
                  onStartGame={(p1, p2) => console.log(p1, p2)}
                />
              }
            />
            <Route
              path='/game'
              element={
                <Board
                  player1='Player 1'
                  player2='Player 2'
                />
              }
            />
            <Route
              path='/about'
              element={
                <div className='flex items-center justify-center h-full'>
                  <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
                    About Tic Tac Toe
                  </h1>
                </div>
              }
            />
            <Route
              path='/settings'
              element={
                <div className='flex items-center justify-center h-full'>
                  <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
                    Settings
                  </h1>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
