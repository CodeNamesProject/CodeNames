import React from 'react'

const Game = () => {
    return (
        <div className="body">
            <header className="h">
                Header
            </header>

            <main>
                <nav>
                    <div className="Team1">
                            <div>
                                <img src="https://boardgametree.com/wp-content/uploads/2019/04/codenames-2.jpg" alt="character" width="110" />
                                <h2>9</h2>
                            </div>
                            <div className="player1">
                                <h6>Operative</h6>
                                <h6>Spymaster</h6>
                            </div>
                    </div>
                </nav>
                <article>
                    <div className="cards">
                        <div>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        </div>
                        <div>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        </div>
                        <div>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        </div>
                        <div>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        </div>
                        <div>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        <button>Card</button>
                        </div>
                    </div>
                </article>
                <aside>
                    <div className="Team2">
                        <div>
                            <h2>9</h2>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKK_nMs2OLA0TZa9XsFD5XYnW2TIlISL9iOy6AgtT2QAUw41H_XxUGvtv0jhRAE8feLE&usqp=CAU" alt="character" width="110" />
                        </div>
                        <div className="player2">
                            <h6>Operative</h6>
                            <h6>Spymaster</h6>
                        </div>
                    </div>
                </aside>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Game
