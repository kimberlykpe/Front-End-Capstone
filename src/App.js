import './App.css';
import DefaultLogo from "./images/nav_logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>    
        <ul>
          <img src={DefaultLogo} height="300px" width="1000px"/>
          <li><a href="/home">Homepage</a></li>        
          <li><a href="/about">About Us</a></li>
          <li><a href="/blog">Blog</a></li>  
        </ul>
      </nav>
        <p><i></i>
          Part of the little lemon.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This part is where you put the text for link.
        </a>
      </header>
    </div>
  );
}

export default App;
