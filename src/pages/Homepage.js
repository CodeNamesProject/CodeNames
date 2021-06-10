import Button from '../components/Button'
import Header from '../components/Header'

const Homepage = () => {
    return(
        <div className={"container"}>
            <div className={"account"}>
                <Button text={"Account"} width={100} nav={"/account"}/>
            </div>
            <Header title={"Codenames Online"} size={150} family={"Tulpen One"}/>
            <Button text={"Create room"} width={200} nav={"/createroom"}/>

            <div className="rule">
                <ol type={"1"} className="rules">
                    <li>How to play:</li>
                    <li>1. Click on the CREATE ROOM button.</li>
                    <li>2. Select the preferred game settings and start the game.</li> 
                    <li>3. Share the room URL with your friends.</li> 
                    <li>4. Enjoy the game!</li>
                </ol>
            </div>
        </div>
    )
}

export default Homepage