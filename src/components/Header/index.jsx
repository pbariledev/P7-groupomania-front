import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/MyProfil">Mon Profil</Link>
        </nav>
    )
}

export default Header