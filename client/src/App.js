import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Nav from './components/navigation/nav';
import Sort from './components/screens/sort';
import About from './components/screens/about';
import MergeSort from './components/screens/mergesort';
import Home from './components/screens/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div id="page-wrap" className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bubblesort" component={Sort} />
            <Route exact path="/mergesort" component={MergeSort} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
