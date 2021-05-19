import Button from '../components/Button'
import Header from '../components/Header'
const Login = () => {
    return (
        <div>
            <form>
                <Header title="Log in" size={75} family={'Thasadith'} />
                <div>
                    <label>Username</label>
                    <input type='text' />
                </div>
                <br/>
                <div>
                    <label>Password</label>
                    <input type='password' />
                </div>
                <br/>
                <Button text='Log in' width={100} />
            </form>
        </div>
    )
}

export default Login