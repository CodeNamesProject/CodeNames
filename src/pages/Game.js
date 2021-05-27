import React, { Component } from 'react'
import Card from '../components/Card'
import posed from 'react-pose';
import { RiUser3Fill } from "react-icons/ri";
import { VscSmiley } from "react-icons/vsc"
import { ImExit } from "react-icons/im";
import './Game.css'

const Animation = posed.div({
    visible : {
        opacity : 1
    },
    hidden : {
        opacity : 0
    }
});
const Animation2 = posed.div({
    visible2 : {
        opacity : 1
    },
    hidden2 : {
        opacity : 0
    }
});
class Game extends Component {
    state = {
        visible : false
    }
    state2 = {
        visible2 : false
    }
    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }
    
    changeVisibility2 = (e) => {
        this.setState({
            visible2: !this.state.visible2
        })
    }
    render(){
        const {visible, visible2} = this.state;
    return (
        <div className="body">
            <header className="h">
                <div className="dropdown">
                    <div>
                        <button className="btn btn1" onClick={this.changeVisibility}>Players<RiUser3Fill className="icon"/></button>
                        <Animation pose = {visible ? "visible" : "hidden"}>
                            <div className="subbtn">
                                <h4>players in this room:</h4>
                                <h4>user1, user2, user3, user4 </h4>
                            </div>
                        </Animation>
                    </div>
                    <div>
                        <button className="btn btn1" onClick={this.changeVisibility2}><VscSmiley className="icon"/>username</button>
                        <Animation2 pose = {visible2 ? "visible2" : "hidden2"}>
                            <div className="subbtn">
                                <div>
                                    <a href="/homepage" className="leave">
                                        <h3><ImExit className="icon"/>Leave the room</h3>
                                    </a>
                                </div>
                            </div>
                        </Animation2>
                    </div>
                </div>
            </header>

            <main>
                <nav>
                    <div className="Team1">
                            <div className="up1">
                                <div>
                                <img src="https://boardgametree.com/wp-content/uploads/2019/04/codenames-2.jpg" alt="character" width="110" />
                                </div>
                                <div className="score1">
                                <h2>9</h2>
                                </div>
                            </div>
                            <div className="player1">
                                <label className="rad-label">
                                <h6 className="rad-text">Operative</h6> 
                                <input type="radio" className="rad-input" name="player" value="operative" />
                                <div className="rad-design"></div>
                                </label>
                                <label className="rad-label">
                                <h6 className="rad-text">Spymaster</h6>
                                <input type="radio" className="rad-input" name="player" value="spymaster" />
                                <div className="rad-design"></div>
                                </label>
                            </div>
                    </div>
                </nav>
                <article>
                    <div className="cardbox">
                        <div>
                        <Card word="Planet" />
                        <Card word="England" />
                        <Card word="Cat" />
                        <Card word="Dress" />
                        <Card word="Pie" />
                        </div>
                        <div>
                        <Card word="Frost" />
                        <Card word="Cell" />
                        <Card word="Server" />
                        <Card word="Apple" />
                        <Card word="Mug" />
                        </div>
                        <div>
                        <Card word="Washington" />
                        <Card word="War" />
                        <Card word="Trip" />
                        <Card word="Wel" />
                        <Card word="Temple" />
                        </div>
                        <div>
                        <Card word="Point" />
                        <Card word="Beat" />
                        <Card word="Ground" />
                        <Card word="Post" />
                        <Card word="Cross" />
                        </div>
                        <div>
                        <Card word="Hotel" />
                        <Card word="Italy" />
                        <Card word="Wave" />
                        <Card word="Bank" />
                        <Card word="Soul" />
                        </div>
                    </div>
                </article>
                <aside>
                    <div className="Team2">
                        <div className="up2">
                            <div className="score2">
                            <h2>9</h2>
                            </div>
                            <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKK_nMs2OLA0TZa9XsFD5XYnW2TIlISL9iOy6AgtT2QAUw41H_XxUGvtv0jhRAE8feLE&usqp=CAU" alt="character" width="110" />
                            </div>
                        </div>
                        <div className="player2">
                            <label className="rad-label">
                            <h6 className="rad-text">Operative</h6> 
                            <input type="radio" className="rad-input" name="player" value="operative" />
                            <div className="rad-design"></div>
                            </label>
                            <label className="rad-label">
                            <h6 className="rad-text">Spymaster</h6>
                            <input type="radio" className="rad-input" name="player" value="spymaster" />
                            <div className="rad-design"></div>
                            </label>
                        </div>
                    </div>
                    <div className="gamelog">
                        <section>
                            <p>Game log</p>
                            
                        </section>
                        <section>
                            
                        </section>
                    </div>
                </aside>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
    }
}

export default Game
