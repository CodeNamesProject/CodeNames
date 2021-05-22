import Button from '../components/Button'
import Header from '../components/Header'
const Signup = () => {
    return (
        <div>
            <form className="container">
            <Header title="Sign up" size={75} family={'Thasadith'} />
                <div>
                    <label>First Name</label>
                    <input type='text' />

                    <label>User Name</label>
                    <input type='text'/>
                </div>
                <br/>
                <div>
                    <label>LastName</label>
                    <input type='text' />

                    <label>Password</label>
                    <input type='password' />
                </div>
                <br/>
                <Button text='Sign up' width={100} nav="/login" />
            </form>
        </div>
    )
}

export default Signup
