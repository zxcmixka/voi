import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainPage } from './page/MainPage/MainPage';
import { Header } from './companents/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainPage/>
    </BrowserRouter>
  );
}

export default App;
