import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/Colors'
import ColorLogo from '../../assets/baniere.png'

const HomeLogo = styled.img`
  height: 100px;
`
const NavContainer = styled.nav`
  padding: 30px;
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
    return (
        <NavContainer>
            <Link to="/"><HomeLogo src={ColorLogo} /></Link>        
            <div>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/MyProfil">Mon profil</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header