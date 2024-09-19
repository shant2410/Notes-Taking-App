import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import NotesCard from './components/NotesCard/NotesCard';
import LoginPage from './screens/LoginPage/LoginPage';
import SignupPage from './screens/SignupPage/SignupPage';

const App=()=> {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/signup' element={<SignupPage/>}/>
      <Route exact path='/notes' element={<MyNotes/>}/>
      <Route path='/notescard' element={<NotesCard/>}/>
    </Routes>
    

    <Footer/>
    </>
  );
}

export default App;
