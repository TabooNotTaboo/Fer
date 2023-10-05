import React, { useContext, useState } from 'react';
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
        return <News />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;

      default:
        return <div>Home Page</div>;
    } 
  }
  return (
    
    <Router>
      <div>
        <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul>
            <li><button onClick={() => setCurrentPage("home")}>Home</button></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
      <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/about">
           
          </Route>
          <Route path="/contact">
            
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    
  );
}


