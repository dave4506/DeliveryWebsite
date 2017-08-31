import styled, { ThemeProvider } from 'styled-components'

let Spacer = styled.div`
  width:100%;
  display: flex;
  height: 2px;
  background-color: ${props => props.theme.colors.primary};
  opacity: 0.1;
`
export default Spacer
