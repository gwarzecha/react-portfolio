import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <div>
          <About></About>
          <Project></Project>
        </div>

      </main>
    </div>
  );
}

export default App;
