import React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './components/timelines/timeline' ;
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
        <div className="App-header">
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/bubblesort" component={BubbleSort} />
                    <Route path="/mergesort" component={MergeSort} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
