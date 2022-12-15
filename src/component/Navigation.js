import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import navStyles from './Navigation.module.css'

function Navigation(props) {
    const ctx = useContext(AuthContext)
    return <ul className={navStyles.header_actions}>
        <li>Users</li>
        <li>Admin</li>
        <li onClick={ctx.onLogOut}>Log-Out</li>
    </ul>
}
export default Navigation