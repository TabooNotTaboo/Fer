import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import News from './News';

export default function Film() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    
    <Router>
     <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/about">
           
          </Route>
          <Route path="/contact">
            
          </Route>
          <Route path="/">
          </Route>
        </Switch>
    </Router>
    
  );
}
