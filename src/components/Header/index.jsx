import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/Colors'
import ColorLogo from '../../assets/baniere.png'
import disconnectLogo from '../../assets/disconnect.png'
import { useAuth } from '../Auth'


const HomeLogo = styled.img`
  height: 50px;
`

const DisconnectLogo = styled.img`
  height: 25px;
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
  const auth = useAuth
    return (
        <NavContainer>
            <Link to="/"><HomeLogo src={ColorLogo} /></Link>        
            <NavMenu>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/profile">profile</StyledLink>
            {
              !auth.user && <StyledLink to="/login">Se connecter</StyledLink>

            }
            <StyledLink to="/"><DisconnectLogo src={disconnectLogo} /></StyledLink> 
            </NavMenu>
        </NavContainer>
    )
}

export default Header