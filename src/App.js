import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingInfo from './views/BookingInfo';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Reservations from './views/Reservations';
import Homepage from './views/Homepage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/reservations' element={<Reservations />}/>
        <Route path='/booking' element={<BookingInfo />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
