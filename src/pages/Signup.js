import React, { Component } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        alert("Signed up")
        event.preventDefault()
        const data = this.state
        console.log(data) 
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        const {firstname, lastname, username, email, password} = this.state
    return (
        <div className="box">
            <form onSubmit={this.handleSubmit}>
                <Header title="Sign up" size={75} family={'Thasadith'} />
                <div className="content">
                    <div>
                        <label>First Name</label>
                        <br/>
                        <input type='text' className="email" value={firstname} name='firstname' onChange={this.handleInputChange}  />
                    </div>
                    <br/>
                    <div>
                        <label>Last Name</label>
                        <br/>
                        <input type='text' className="email" value={lastname} name='lastname' onChange={this.handleInputChange} />
                    </div>
                    <br/>
                    <div>
                        <label>User Name</label>
                        <br/>
                        <input type='text' className="email" value={username} name='username' onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>Email</label>
                        <br/>
                        <input type='email' className="email" value={email} name='email' onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>Password</label>
                        <br/>
                        <input type='password' className="email" value={password} name='password' onChange={this.handleInputChange}/>
                    </div>
                </div>
                <br/>
                <button className='btn' style={{width:250}}>Sign up</button>
                <hr/>
                <Button text='Redirect to Login page' width={250} nav="/login" />
            </form>
        </div>
        
    )
}
}


export default Signup
