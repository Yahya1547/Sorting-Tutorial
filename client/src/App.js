import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Nav from './components/navigation/nav';
import BubbleSort from './components/screens/bubblesort';
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
            <Route exact path="/bubblesort" component={BubbleSort} />
            <Route exact path="/mergesort" component={MergeSort} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
