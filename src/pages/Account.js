import Button from '../components/Button'
import Header from '../components/Header'
import { MdAccountCircle } from "react-icons/md";

const Account = () => {
    return(
        <form>
            <Header title=" Account" size={50} family={'Thasadith'} />
            <div className="box" style={{marginTop: 5}}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <MdAccountCircle size={80} style={{color: 'white',marginTop: '15'}}/>
                    </div>
                    <div>
                        <label>Firstname &nbsp;</label>
                        <input type='text' className='input'/>
                    </div>
                    <br/>
                    <div>
                        <label>Lastname &nbsp;</label>
                        <input type='text' className='input'/>
                    </div>
                    <br/>
                    <div>
                        <label>Username &nbsp;</label>
                        <input type='text' className='input'/>
                    </div>
                    <br/>
                    <div>
                        <label>Password &nbsp;</label>
                        <input type='text' className='input'/>
                    </div>
                    <br/>
                    <Button text='Save' width={150} nav='/homepage' />
            </div>
        </form>    
    )
}
export default Account
