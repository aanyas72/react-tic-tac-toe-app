const Header = ({ startNewGame, displayButton }) => {
    return (
        <div className='header'>
            <h1 className='game-title'>Tic-Tac-Toe</h1>
            
            {displayButton &&
                <button
                className='btn'
                onClick={() => {
                    startNewGame();
                }}
                >Play Again</button>}
            
        </div>
    )
}

export default Header;