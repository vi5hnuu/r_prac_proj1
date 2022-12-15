import { useEffect, useState } from 'react'
import './Authenticate.css'

function Authenticate(props) {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [enteredPassword, setEnteredPassword] = useState('')
    const [isPassValid, setIsPassValid] = useState(false)

    useEffect(() => {
        //debouncing
        const timer = setTimeout(() => {
            console.log('Validating form');
            const emailValid = /[a-zA-Z0-9]+@gmail.com$/.test(enteredEmail)
            const passValid = enteredPassword.trim().length > 7
            setIsEmailValid(emailValid)
            setIsPassValid(passValid)
        }, 500);
        return () => {
            console.log('Cleaning up...before next call.');
            clearTimeout(timer)
        }
    }, [enteredEmail, enteredPassword])
    function onEmailChange(event) {
        setEnteredEmail(event.target.value)
    }
    function onPassChange(event) {
        setEnteredPassword(event.target.value)
    }
    function logInhandler(event) {
        event.preventDefault()
        props.onLogIn()
    }
    return <main>
        <form className='form' onSubmit={logInhandler}>
            <div className='form_control'>
                <label>Email</label>
                <input className={!isEmailValid ? 'invalid' : ''} value={enteredEmail} type='email' placeholder='Enter email' onChange={onEmailChange}></input>
            </div>
            <div className='form_control'>
                <label>Password</label>
                <input className={!isPassValid ? 'invalid' : ''} value={enteredPassword} type='password' placeholder='Enter Password' onChange={onPassChange}></input>
            </div>
            <button className='btn_login' type='submit' disabled={!(isEmailValid && isPassValid)}>LogIn</button>
        </form>
    </main>
}

export default Authenticate