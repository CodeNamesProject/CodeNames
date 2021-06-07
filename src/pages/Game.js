import React, { Component } from 'react'
import Card from '../components/Card'
import {Dropdown, NavDropdown} from "react-bootstrap";
import { VscSmiley } from "react-icons/vsc"
import { ImExit } from "react-icons/im";
import './Game.css'

class Game extends Component {
    render(){
    return (
        <div className="body">
            <header className="h">
                <div className="dropdown">
                    <div>
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <VscSmiley className="icon"/>username
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className="invite-btn"> Invite players by sending them this link: </div>
                            <div> <input type="url"/> </div>
                            <NavDropdown.Divider />
                            <Dropdown.Item href="/homepage" style={{textAlign: 'center'}} className="leave-btn"><ImExit className="icon"/>Leave the room</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown> 
                    </div>
                </div>
            </header>

            <main>
                <nav>
                <div className="teams-font">Team 1</div>
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
                                <h6 className="rad-text">Operative</h6> 
                                <button className="join-btn">Join as Operative</button>
 
                                <h6 className="rad-text">Spymaster</h6>
                                <button className="join-btn">Join as Spymaster</button>
                            </div>
                    </div>
                </nav>
                <article>
                    <div className="card-box" style={{marginTop:60}}>
                        <div className="card-line">
                        <Card word="Planet" />
                        <Card word="England" />
                        <Card word="Cat" />
                        <Card word="Dress" />
                        <Card word="Pie" />
                        </div>
                        <div className="card-line">
                        <Card word="Frost" />
                        <Card word="Cell" />
                        <Card word="Server" />
                        <Card word="Apple" />
                        <Card word="Mug" />
                        </div>
                        <div className="card-line">
                        <Card word="Washington" />
                        <Card word="War" />
                        <Card word="Trip" />
                        <Card word="Wel" />
                        <Card word="Temple" />
                        </div>
                        <div className="card-line">
                        <Card word="Point" />
                        <Card word="Beat" />
                        <Card word="Ground" />
                        <Card word="Post" />
                        <Card word="Cross" />
                        </div>
                        <div className="card-line">
                        <Card word="Hotel" />
                        <Card word="Italy" />
                        <Card word="Wave" />
                        <Card word="Bank" />
                        <Card word="Soul" />
                        </div>
                    </div>
                    <br/>
                    <div className="clue">
                        <div>
                        <input type="text" placeholder="Type your clue here" className="input-clue"/> 
                        </div>
                        &nbsp; &nbsp;
                        <div className="dropdown-container">
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        </div>
                    </div>
                    <br/>
                    <button className='clue-btn'>Give Clue</button>
                </article>
                <aside>
                <div className="teams-font">Team 2</div>
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
                            <h6 className="rad-text">Operative</h6> 
                            <button className="join-btn">Join as Operative</button>

                            <h6 className="rad-text">Spymaster</h6>
                            <button className="join-btn">Join as Operative</button>
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
        </div>
    )
    }
}

export default Game
