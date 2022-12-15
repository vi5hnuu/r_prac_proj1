import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import headerClasses from './Header.module.css'
import Navigation from './Navigation'

function Header(props) {
    const ctx = useContext(AuthContext)
    return <header className={headerClasses.header}>
        <h1 className={headerClasses.page_title}>A Typical Page</h1>
        {ctx.isLoggedIn && <Navigation />}
    </header>
}


export default Header