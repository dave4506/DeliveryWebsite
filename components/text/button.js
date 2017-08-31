import styled, { ThemeProvider } from 'styled-components'

let button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1em 3em;
  height: 48px;
  border-radius: 24px;
  border-width: 0px;
  letter-spacing: 0.3em;
  font-family: ${props => props.theme.fontFamilies.body};
  text-transform: ${props => props.uppercase ? "uppercase":"none"};
  box-shadow: 0 10px 30px 0 rgba(255,127,108,0.30);
  transition: box-shadow 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 50px 0 rgba(255,127,108,0.50);
  }
  &:focus {
    outline: none;
  }
`

export default button
