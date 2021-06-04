import './TicTacToe.css';
import Header from './Header'
import React, { useState, useEffect } from 'react'
import utils from '../utils'
import Box from './Box';

const TicTacToe = ({ clicky }) => {
  const [gameState, setGameState] = useState('x-turn');
  const [inX, setInX] = useState([]);
  const [inO, setInO] = useState([]);

  //change game state if there is a winner
  useEffect(() => {
    switch (determineWinner()) {
      case 'x-won': setGameState('x-won'); break;
      case 'o-won': setGameState('o-won'); break;
      case 'game-tie': setGameState('game-tie'); break;
    }
  }, [gameState])

  //determine whose turn it is
  useEffect(() => {
    if (inX.length > 0 && (inX.length + inO.length) % 2 === 0) {
      setGameState('x-turn');
    }
    if ((inX.length + inO.length) % 2 === 1) {
      setGameState('o-turn');
    }
  }, [inX, inO])

  //show a message based on the state of the game
  const displayGameState = () => {
    switch (gameState) {
      case 'x-turn': return 'X\'s turn';
      case 'o-turn': return 'O\'s turn';
      case 'x-won': return 'X won!';
      case 'o-won': return 'O won!';
      case 'game-tie': return 'Tie! No winner.'
    }
  }

  //show the button based on the game state
  const displayButton = (gameState === 'x-won' ||
    gameState === 'o-won' ||
    gameState === 'game-tie');

  //if the box number is in the array, return the value so it will be visible on the board
  const showXOrO = (boxNum) => {
    if (inX.includes(boxNum)) {
      return 'X';
    }
    if (inO.includes(boxNum)) {
      return 'O';
    }
  }
  
  //add the number of the box clicked to the x or o array
  const addToArray = (boxNum) => {
    if ((gameState === 'x-won' ||
    gameState === 'o-won' ||
    gameState === 'game-tie') || inX.includes(boxNum) || inO.includes(boxNum)) {
      return;
    }
    if (gameState === 'x-turn') {
      setInX([...inX, boxNum]);
    } else {
      setInO([...inO, boxNum]);
    }
  }

  //determine who the winner is and change the state
  const determineWinner = () => {
    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (inX.includes(a) && inX.includes(b) && inX.includes(c)) {
        return 'x-won';
      }
      if (inO.includes(a) && inO.includes(b) && inO.includes(c)) {
        return 'o-won';
      }
    }
    if (inX.length + inO.length === 9) {
      return 'game-tie';
    }
  }

  return (
    <div className='game'>
      <Header
        startNewGame={clicky}
        displayButton={displayButton} />
      <h4 className='game-status'>{displayGameState()}</h4>
      <div className='game-board'>
        {utils.range(1, 9).map((boxNum) => 
          <Box
            key={boxNum}
            classNames={`box box-${boxNum}`}
            value={showXOrO(boxNum)}
            addToArray={() => addToArray(boxNum)}
          />
        )}
      </div>
    </div>  
  );
}

export default TicTacToe;