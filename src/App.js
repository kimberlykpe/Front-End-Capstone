import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Specials from './components/Specials';



function App() {
  return (
    <div className ="App">
    <><Header /><Hero /><Specials /><Testimonials /><About /><Footer /></>
    </div>
  );
}

export default App;
