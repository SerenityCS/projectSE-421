import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from './context/AppContext';

// الصفحات

import About from './pages/About';

const App = () => {
  return (
    <AppContextProvider>
      <div>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<About />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
};

export default App;



