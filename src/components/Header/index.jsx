import { Link } from 'react-router-dom'
import ColorLogo from '../../assets/baniere.png'
import { Logout } from '../Login/logout'


function Header() {
    return (
        <nav className='header_navContainer'>
            <Link to="/"><img className='header_logo' src={ColorLogo} alt="logo"/></Link>        
            <nav className='header_navMenu'>
            <Link className='header_link' to="/">Accueil</Link>
            <Link className='header_link' to="/profil">profil</Link>
            <Link className='header_link' to="/"><Logout/> </Link> 
            </nav>
        </nav>
    )
}

export default Header