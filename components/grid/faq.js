import styled, { ThemeProvider } from 'styled-components'
import Body from '../text/body'
import Caption from '../text/caption'

const Wrapper = styled.div`
  padding: 1em 2em;
  @media (max-width: 800px) {
    padding: 1em 1em;
  }
  @media (max-width: 600px) {
    padding: 0.5em 0em;
  }
`

export default ({question,answer}) => (
  <Wrapper>
    <Body>{question}</Body>
    <Caption style={{opacity:0.5}}>{answer}</Caption>
  </Wrapper>
)
