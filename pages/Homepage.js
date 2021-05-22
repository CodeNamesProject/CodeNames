import Button from '../components/Button'
import Header from '../components/Header'

const Homepage = () => {
    return(
        <div className={"container"}>
            <div className={"account"}>
                <Button text={"Account"} width={100} nav={"/account"}/>
            </div>
            <Header title={"Codenames"} size={100} family={"Thasadith"}/>
            <Header title={"Online"} size={100} family={"Thasadith"}/>
            <Button text={"Create room"} width={200} nav={"/createroom"}/>
            <div className={"rules"}>
                <label>How to play:</label>
                <ol type={"1"}>
                    <p>1. Click on the CREATE ROOM button.</p>
                    <p>2. Select the preferred game settings and start the game.</p>
                    <p>3. Connect with your friends using your favorite audio or video chat.</p>
                    <p>4. Share the room URL with your friends.</p>
                    <p>5. Enjoy the game!</p>
                </ol>
            </div>
        </div>
    )
}

export default Homepage