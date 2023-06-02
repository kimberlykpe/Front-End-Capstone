import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Specials from "./components/Specials";
import BookingForm from "./components/BookingForm";
import React from 'react';
import { Route, Routes } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  /*let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/home":
      component = <App />
      break
    case "/about":
      component = <About />
      break
    case "/menu":
      component = <Specials />
      break
    case "/reservations":
      component = <BookingForm />
      break
    case "/order-online":
      component = <Specials />
      break
    case "/login":
      component = <App />
      break
  }*/
  return (
    <>
    <div className="container">
    <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/reservations" element={<BookingForm />} />
          <Route path="/order-online" element={<Specials />} />
          <Route path="/login" element={<App />} />
        </Routes>
    </div>
    </>
    )
}

export default App;
