import styled from 'styled-components'

const DisplayH1 = styled.h1`
  font-family: ${props => props.theme.fontFamilies.body};
  margin: 0;
  font-size: ${props => props.theme.fontSizes.display};
  color: ${props => props.theme.colors.black};
  text-transform: capitalize;
  @media (max-width: 800px) {
    font-size: 48px;
    letter-spacing: 0.1em;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
`

DisplayH1.defaultProps = {
	theme: {
		fontFamilies:{
      display:"Sans-Serif"
    }
	}
}

export default DisplayH1
