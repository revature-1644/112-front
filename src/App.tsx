import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AllFlightsPage } from './pages/AllFlightsPage';
import { PostFlightPage } from './pages/PostFlightPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/AllFlights" element = {<AllFlightsPage></AllFlightsPage>}></Route>
          <Route path="/AddFlight" element = {<PostFlightPage></PostFlightPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
