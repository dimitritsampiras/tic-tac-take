import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="gameheader">
        <h1>TIC-TAC-TAKE!</h1>
        <h2> Tic-tac-toe but you can take your <br></br>opponents moves!</h2>
      </header>
      <Board />
    </div>
  );
}

export default App;