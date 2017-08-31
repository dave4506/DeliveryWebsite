import styled from 'styled-components'

const Body = styled.p`
  font-family: ${props => props.theme.fontFamilies.body};
  margin: 0;
  padding-bottom: 1em;
  font-size: ${props => props.theme.fontSizes.standard};
  line-height: 24px;
  color: ${props => props.theme.colors.black};
  text-transform: ${props => props.uppercase ? "uppercase":"none"}
`

Body.defaultProps = {
	theme: {
		fontFamilies:{
      display:"Serif"
    }
	}
}

export default Body
