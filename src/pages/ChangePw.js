import Button from '../components/Button'
import Header from '../components/Header'
import { RiLockPasswordFill } from "react-icons/ri";

const ChangePw = () => {
    return (
        <div>
            <form>
                <Header title=" Account" size={50} family={'Thasadith'} />
                <div className="box" style={{marginTop: 5}}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <RiLockPasswordFill size={50} style={{color: 'white',marginTop: '15'}}/>
                    </div>
                    <br/>
                    <div>
                        <input type='text' className='input' placeholder='Type new password'/>
                    </div>
                    <br/>
                    <div>
                        <input type='text' className='input' placeholder='Confirm password'/>
                    </div>
                    <br/>
                    <Button text='Save' width={200} nav='/homepage' />
                </div>
            </form> 
        </div>
    )
}

export default ChangePw
