import Button from '../components/Button'

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Gameroom = () => {
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    return (
        <div>
            <div className={"playeruser"}>
                <div className={"dropdown players"}>
                    <div className={"dropbtn"}><Button text={"Players"} width={100}/></div>
                <div className="dropdown player">
                    <button className="dropbtn">Players</button>
                    <div className="dropdown-content" style={{left:0}}>
                        <div>Invite link <br/>
                            <input type={"text"} value={text} size={"15"} onChange={(event) => setText(event.target.value)}/> <br/>
                            <CopyToClipboard text={text} onCopy={onCopyText}>
                                <div className="copy-area">
                                    <button className={"gameroombtn"}>Copy to Clipboard</button>
                                </div>
                            </CopyToClipboard>
                        </div>
                        <hr/>
                        <div>
                            Players in this room
                            <ul>
                                <li>User1</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={"dropdown username"}>
                    <div className={"dropbtn"}><Button text={"username"} width={100}/></div>
                    <button className="dropbtn">Username</button>
                    <div className="dropdown-content">
                        <button className={"gameroombtn"}>Become spectator</button><br/><br/>
                        <button className={"gameroombtn"}>Switch to another team</button><br/><br/>
                        <button className={"gameroombtn"}>Leave the room</button><br/><br/>
                    </div>
                </div>
            </div>

                    <label htmlFor="spymaster">Select Spymaster</label>
                    <input type="radio" id="spymaster" name="role2" value="spymaster"/>

                <div className={"confirm"}>
                    <Button text={"Confirm"} width={100} nav={"/game"}/>
                </div>
            </div>

        </div>
    )
}
export default Gameroom