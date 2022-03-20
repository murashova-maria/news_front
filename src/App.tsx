import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Footer, Header } from './components/index'

import './assets/sass/style.scss';
import AppRouter from './AppRouter';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div id='main' className="main">
          <AppRouter />
        </div>
        <div className='main__section2'>
          Advertisement
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
