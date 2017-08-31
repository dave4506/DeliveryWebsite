import styled from 'styled-components'

const Label = styled.h3`
  font-family: ${props => props.theme.fontFamilies.accent};
  margin: 0;
  font-size: ${props => props.theme.fontSizes.smaller};
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${props => props.theme.colors.mutedColor};
`

Label.defaultProps = {
	theme: {
		fontFamilies:{
      display:"Sans-Serif"
    }
	}
}

export default Label
