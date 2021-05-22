import Button from '../components/Button'
import Header from '../components/Header'

const Gameroom = () => {
    return (
        <div>
            <div className={"playeruser"}>
                <div className={"dropdown players"}>
                    <div className={"dropbtn"}><Button text={"Players"} width={100}/></div>
                </div>

                <div className={"dropdown username"}>
                    <div className={"dropbtn"}><Button text={"username"} width={100}/></div>
                </div>
            </div>

            <div className={"team"}>
                <div className={"team1 item"}>
                    <h1>Team 1</h1>
                    <label htmlFor="operative">Select Operative</label>
                    <input type="radio" id="operative" name="role" value="operative"/>
                    <br/>
                    <label htmlFor="spymaster">Select Spymaster</label>
                    <input type="radio" id="spymaster" name="role" value="spymaster"/>
                </div>

                <div className={"team2 item"}>
                    <h1>Team 2</h1>
                    <label htmlFor="operative">Select Operative</label>
                    <input type="radio" id="operative" name="role2" value="operative"/>
                    <br/>
                    <label htmlFor="spymaster">Select Spymaster</label>
                    <input type="radio" id="spymaster" name="role2" value="spymaster"/>
                </div>
            </div>

        </div>
    )
}
export default Gameroom