import React, { useContext,useState } from 'react';
import { ThemeContext } from './Component/ThemeContext';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Component/Film.css';
import './Component/Posters.css';
import './Component/Footer.css';
import './App.css';
import Home from './Component/Home';
import News from './Component/News';
import About from './Component/About';
import Contact from './Component/Contact';

export default function App() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "news":
        return <News />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;

    } 
  }
  return (
    
    <Router>
      <div>
        <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
          <li><button onClick={() => setCurrentPage("home")}>Home</button></li>
          <li><button onClick={() => setCurrentPage("news")}>News</button></li>
          <li><button onClick={() => setCurrentPage("about")}>About</button></li>
          <li><button onClick={() => setCurrentPage("contact")}>Contact</button></li>
        </ul>
         
          <div style={{ position: 'relative' }}>
            <a
              className='swicth-mode'
              href='#'
              onClick={toggle}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: 'none',
                float: 'right',
                margin: '0',
                padding: '0'
              }}
              data-testid="toggle-theme-btn"
            >
              {!dark ? 'Dark' : 'Light'} mode
            </a>
          </div>
        </nav>
      </div>
      <div className="content">
        {renderPage()}
      </div>
      
    </Router>
    
  );
}


