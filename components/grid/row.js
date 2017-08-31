import styled, { ThemeProvider } from 'styled-components'

let Row = styled.div`
  max-width: ${props => props.theme.measurements.row};
  display: flex;
  margin: ${props => props.theme.spacing.block} auto;
  @media (max-width: 800px) {
    padding: 0 4em;
  }
  @media (max-width: 600px) {
    padding: 0 2em;
    display: block;
    margin: 2em auto;
  }
`
export default Row
