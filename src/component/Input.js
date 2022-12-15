import styles from './Input.module.css'

function Input(props) {
    return <input className={`${styles.input} ${!props.isValid ? `${styles.invalid}` : ''}`}
        onBlur={props.onBlur}
        value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
}

export default Input