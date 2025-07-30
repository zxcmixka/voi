import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './page/MainPage/MainPage';
import { Header } from './companents/header/Header';
import { Friend } from './companents/friend/Friend';
import { NotFoundPage } from './page/NotFoundPage/NotFound';
//import { VideoCall } from './companents/Call/VideoCall';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/friend" element={<Friend />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  );
}

export default App;
