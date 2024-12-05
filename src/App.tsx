import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';
import RoutesConfig from './routes/RoutesConfig';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className='h-screen bg-white dark:bg-gray-900'>
          <RoutesConfig />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
