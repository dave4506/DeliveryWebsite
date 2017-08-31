import Faq from './faq'
import styled, { ThemeProvider } from 'styled-components'

const Img = styled.img`
  width: 48px;
  height: auto;
  margin-left: 2em;
  @media (max-width: 800px) {
    margin-left: 1em;
  }
  @media (max-width: 600px) {
    margin-left: 0em;
  }
`
export default ({title,answer,src}) => (
  <div>
    <Img src={src}/>
    <Faq
      question={title}
      answer={answer}
    />
  </div>
)
