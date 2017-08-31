import styled, { ThemeProvider } from 'styled-components'
import A from './text/anchor'
import Row from './grid/row'
import {scroller} from 'react-scroll'

const NavRow = Row.extend`
  max-width: ${props => props.theme.measurements.row};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.theme.nav.height};
  margin: auto;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 80px;
  }
`
const IconLogo = A.extend`
  color: ${props => props.theme.colors.primary }
`
const LinksRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavLink = A.extend`
  padding: 0 ${props => props.theme.spacing.large};
  transition: color 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.black};
  }
  @media (max-width: 600px) {
    padding: 0 0.5em;
  }
`

const BrandLogo = styled.img`
  width: 50px;
  height: auto;
  @media (max-width: 600px) {
    width: 40px;
  }
`

const scrollTo = (name) => {
  scroller.scrollTo(name, {
    duration: 600,
    smooth: true,
    offset: -80
  })
}
export default () => (
  <NavRow>
    <BrandLogo src="static/logo.png"/>
    <LinksRow>
      <NavLink onClick={(e)=>{scrollTo("pricing")}}>Pricing</NavLink>
      <NavLink onClick={(e)=>{scrollTo("features")}}>Features</NavLink>
      <NavLink onClick={(e)=>{scrollTo("faq")}}>FAQ</NavLink>
    </LinksRow>
  </NavRow>
)
