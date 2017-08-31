import Row from './row'
import Display from '../text/display'
import Body from '../text/body'
import Caption from '../text/caption'
import Button from '../text/button'
import styled, { ThemeProvider } from 'styled-components'

const PriceCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 2em;
  padding: 2em 1.5em;
  @media (max-width: 800px) {
    margin: 1em 0.5em;
  }
`

const PriceDisplay = Display.extend`
  font-size: ${props => props.theme.fontSizes.title};
  padding-bottom: 1em;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`
export default ({title,children,subtitle,submitTitle,backgroundColor}) => (
  <PriceCard style={{backgroundColor}}>
    <PriceDisplay>{title}</PriceDisplay>
    <Body>{subtitle}</Body>
    {children}
    <Button uppercase>{submitTitle}</Button>
  </PriceCard>
)
