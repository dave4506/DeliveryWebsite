import styled, { ThemeProvider } from 'styled-components'
import Row from './row'
import Label from '../text/label'

let ContentColumn = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export default ContentColumn
