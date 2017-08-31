import styled, { ThemeProvider } from 'styled-components'
import A from './text/anchor'
import Caption from './text/caption'
import Body from './text/body'
import Link from 'next/link'
import Row from './grid/row'

const FooterWrapper = styled.div`
  padding: 2em 0;
  background-color: ${props => props.theme.colors.mutedColor};
  @media (max-width: 600px) {
    padding: 0.5em 0;
  }
`
const FooterRow = Row.extend`
  max-width: ${props => props.theme.measurements.row};
  display: flex;
  justify-content: space-between;
  margin: auto;
`
const IconLogo = A.extend`
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
`
const LinksRow = styled.div`
  display: flex;
  justify-content: space-between;
`
const FooterLink = A.extend`
  display: block;
  letter-spacing: 0.2em;
  padding: 0.3em ${props => props.theme.spacing.standard};
  transition: color 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.black};
  }
  @media (max-width: 600px) {
    padding: 0.2em 0;
  }
`

const FooterCaption = Caption.extend`
  color: ${props => props.theme.colors.black};
  opacity: 0.2;
`

const FooterTitle = Caption.extend`
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
  padding: 0 1em 0.5em 1em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  @media (max-width: 600px) {
    padding: 0 0em 0.5em 0em;
  }
`


export default () => (
  <FooterWrapper>
    <FooterRow>
      <div>
        <IconLogo>Shipmnt</IconLogo>
        <FooterCaption>Made with love by David Sun</FooterCaption>
      </div>
      <LinksRow>
        <div>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink>Privacy Policy</FooterLink>
        </div>
        <div>
          <FooterTitle>Social</FooterTitle>
          <FooterLink>Twitter</FooterLink>
          <FooterLink>iTunes</FooterLink>
          <FooterLink>Facebook</FooterLink>
        </div>
      </LinksRow>
    </FooterRow>
  </FooterWrapper>
)
