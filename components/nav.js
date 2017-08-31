import styled, { ThemeProvider } from 'styled-components'
import A from './text/anchor'
import Link from 'next/link'
import Row from './grid/row'

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

export default () => (
  <NavRow>
    <BrandLogo src="static/logo.png"/>
    <LinksRow>
      <NavLink>Pricing</NavLink>
      <NavLink>Features</NavLink>
      <NavLink>FAQ</NavLink>
    </LinksRow>
  </NavRow>
)
