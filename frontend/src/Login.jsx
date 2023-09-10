import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {
    const [ values, setValues ] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('', values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            
            <div className="container">
                <div className="form_head">
                    Login
                </div>
                <form onSubmit={handleSubmit} className="form_body">

                    <div className="blocks">
                        <div className="email">
                            <p className='tagn'>Email</p>
                            <input onChange={e => setValues({...values, email: e.target.value})}  type="email" 
                                name='email' placeholder='Enter Email' />
                        </div>
                        <div className="password">
                            <p className='tagn'>Password</p>
                            <input onChange={e => setValues({...values, password: e.target.value})} 
                                type="text" name='password' placeholder='Enter Password'/>
                        </div>
                    </div>

                    <div className="btn">
                        <button>Log in</button>
                        <p className="terms">You are agree with our terms and conditions</p>
                    </div>

                    {/* <div className="acc">
                        <button>Create Account</button>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Login
