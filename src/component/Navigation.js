import navStyles from './Navigation.module.css'

function Navigation(props) {
    return <ul className={navStyles.header_actions}>
        <li>Users</li>
        <li>Admin</li>
        <li onClick={props.onLogOut}>Log-Out</li>
    </ul>
}
export default Navigation