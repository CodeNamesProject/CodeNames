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
                                9
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
                    Sidebar
                </aside>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Game
