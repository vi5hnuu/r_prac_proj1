import { useEffect, useState, useReducer } from 'react'
import './Authenticate.css'

function emailReducer(state, action) {
    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: /[a-zA-Z0-9]+@gmail\.com$/.test(action.value) }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: /[a-zA-Z0-9]+@gmail\.com$/.test(state.value) }
    }
    return { value: '', isValid: false }
}
function passReducer(state, action) {
    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: action.value.length > 7 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.length > 7 }
    }
    return { value: '', isValid: false }
}

function Authenticate(props) {
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: true })
    const [passState, dispatchPass] = useReducer(passReducer, { value: '', isValid: true })
    const [isFormValid, setIsFormValid] = useState(false)


    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('calliing form validation.');
            setIsFormValid(emailState.isValid && passState.isValid)
        }, 500);
        return () => { clearTimeout(timer) }
    }, [emailState.isValid, passState.isValid])

    function validateEmail() {
        dispatchEmail({ type: 'INPUT_BLUR' })
    }
    function validatePass() {
        dispatchPass({ type: 'INPUT_BLUR' })
    }
    function onEmailChange(event) {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value })
    }
    function onPassChange(event) {
        dispatchPass({ type: 'USER_INPUT', value: event.target.value })

    }
    function logInhandler(event) {
        event.preventDefault()
        props.onLogIn()
    }
    return <main>
        <form className='form' onSubmit={logInhandler}>
            <div className='form_control'>
                <label>Email</label>
                <input className={!emailState.isValid ? 'invalid' : ''}
                    onBlur={validateEmail}
                    value={emailState.value} type='email' placeholder='Enter email' onChange={onEmailChange}></input>
            </div>
            <div className='form_control'>
                <label>Password</label>
                <input className={!passState.isValid ? 'invalid' : ''}
                    onBlur={validatePass}
                    value={passState.value} type='password' placeholder='Enter Password' onChange={onPassChange}></input>
            </div>
            <button className='btn_login' type='submit' disabled={!(isFormValid)}>LogIn</button>
        </form>
    </main>
}

export default Authenticate