import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled.a`
  font-size: ${props => props.theme.fontSizes.smaller};
  font-family: ${props => props.theme.fontFamilies.body};
  color: ${props => props.active ? props.theme.colors.primary: props.theme.colors.primary};
  letter-spacing: 0.3em;
  text-transform: uppercase;
`

StyledLink.defaultProps = {
  active:false,
	theme: {
		fontFamilies:{
      accent:"Sans-Serif"
    }
	}
}

export default StyledLink
