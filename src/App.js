import './App.css';
import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from './components/About';
import Specials from './components/Specials';
import Footer from "./components/Footer";
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Specials />
    <Testimonials />
    <Footer />
    <BookingForm />

    </>
    )
}

export default App;

