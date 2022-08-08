import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/Colors'
import ColorLogo from '../../assets/baniere.png'
import { useAuth } from '../Auths/Auth'
import { Logout } from '../Log/logout'


const HomeLogo = styled.img`
  height: 50px;
`



const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 20px;
    &:hover {
        cursor: pointer;
        color: ${colors.tertiary}; 
        border-radius: 30px; 
        background-color: ${colors.secondary};
      }
`
 
function Header() {
  const auth = useAuth()
    return (
        <NavContainer>
            <Link to="/"><HomeLogo src={ColorLogo} /></Link>        
            <NavMenu>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/profil">profil</StyledLink>
            {
              !auth.user && <StyledLink to="/loginpage">Se connecter</StyledLink>

            }
            <StyledLink to="/"><Logout/> </StyledLink> 
            </NavMenu>
        </NavContainer>
    )
}

export default Header