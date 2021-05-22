import Button from '../components/Button'
import Header from '../components/Header'
const Login = () => {

    return (
        <form>
        <div className="box">
            
                <Header title=" Log in" size={75} family={'Thasadith'} />
                <div>
                    <label>Username</label>
                    <br/>
                    <input type='text' className='input'/>
                </div>
                <br/>
                <div>
                    <label>Password</label>
                    <br/>
                    <input type='password' className='input'/>
                </div>
                <br/>
                <Button text='Log in' width={253} />
            
        </div>
        </form>
    )
}

export default Login