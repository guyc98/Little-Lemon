import { Route, Routes } from 'react-router-dom';
import { useReducer, useState } from 'react';
import './App.css';
import BookingInfo from './views/BookingInfo';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Homepage from './views/Homepage';
import BookingPage from './views/BookingPage';
import BookingForm from './componets/BookingForm';
import { BookingProvider } from './BookingFormContext';



function App() {
  
  return (
    <BookingProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/reservations' element={<BookingPage />}/>
        <Route path='/booking' element={<BookingInfo />}/>
      </Routes>
      <Footer />
    </BookingProvider>
  );
}

export default App;
