import Caption from '../text/caption'
import styled, { ThemeProvider } from 'styled-components'

const PriceCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 2em;
  padding: 2em 1.5em;
`

const BulletCaption = Caption.extend`
  padding: 0em 1em;
  text-decoration: ${props => props.crossout ? "line-through":"none"};
  opacity: ${props => props.crossout ? 0.5:1};
`
export default ({children,crossout}) => (
  <BulletCaption crossout={crossout}>&#x2022; {children}</BulletCaption>
)
