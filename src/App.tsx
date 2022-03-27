import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Footer, Header } from './components/index'

import './assets/sass/style.scss';
import AppRouter from './AppRouter';
import { PopupHandler } from './components/PopupHandler';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {

  const path = useLocation().pathname

  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [isCreate, setIsCreate] = useState<boolean>(false)

  const checkAdmin = () => {
    const admin = path.split('/').some(el => el === 'admin')
    const create = path.split('/').some(el => el === 'create')
    setIsAdmin(admin)
    setIsCreate(create)
  }

  useEffect(() => {
    checkAdmin()
  }, [path])

  useEffect(() => {
    console.log('isAdmin', isAdmin);
  }, [isAdmin])

  return (
    <div className={isCreate ? "wrapper overflowX" : "wrapper"}>
      {!isAdmin && <Header />}
      <PopupHandler />
      <ToastContainer />
      <div id='main' className={!isAdmin ? "main" : "main h100vh"}>
        <AppRouter />
      </div>
      {!isAdmin && <div className='main__section2'>
        Advertisement
            </div>}
      {!isAdmin && <Footer />}
    </div>
  );
}

export default App;
