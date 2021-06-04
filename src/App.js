import { useState } from 'react';
import TicTacToe from './components/TicTacToe'

const App = () => {
    const [gameId, setGameId] = useState(0);
    return (
        <TicTacToe
            key={gameId}
            clicky={() => setGameId(gameId + 1)}
        />
    );
}

export default App;