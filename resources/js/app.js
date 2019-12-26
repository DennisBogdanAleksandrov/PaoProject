
// require('./bootstrap'); 

import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'; //measn to rename it to Router. npm install --save react-router-dom -
import ReactDOM from 'react-dom';
import Home from './pages/HomePage';
import FlashcardsPage from './pages/FlashcardsPage';
import SettingsP from './pages/SettingsPage';



function App(){
  return (
    <Router>
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/flashcards" component={FlashcardsPage} />
        <Route exact path="/settings" component={SettingsP} />
      </div>
    </Router>
  )
}

export default App;


if (document.getElementById('react')) {
  ReactDOM.render(<App />, document.getElementById('react'));
}

//Install Tailwind.
//Create the all the pages.
//Start on Creating the Nav bar
//

//I'm trying to achive this page not being displayed