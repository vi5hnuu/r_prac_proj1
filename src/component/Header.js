import AuthContext from '../context/AuthContext'
import headerClasses from './Header.module.css'
import Navigation from './Navigation'

function Header(props) {
    return <AuthContext.Consumer>
        {(ctx) => {
            return <header className={headerClasses.header}>
                <h1 className={headerClasses.page_title}>A Typical Page</h1>
                {ctx.isLoggedIn && <Navigation onLogOut={props.logout} />}
            </header>
        }}

    </AuthContext.Consumer>
}

export default Header