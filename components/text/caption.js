import styled from 'styled-components'

const Caption = styled.p`
  font-family: ${props => props.theme.fontFamilies.body};
  margin: 0;
  padding-bottom: 1em;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  color: ${props => props.theme.colors.black};
  opacity: ${props => props.muted ? 0.3:1}
`

Caption.defaultProps = {
	theme: {
		fontFamilies:{
      display:"Serif"
    }
	}
}

export default Caption
