import styled from 'styled-components'

const Paper = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin: ${props => props.theme.spacing.paper};
  min-height: calc(100vh - 3.6em);
  border-radius: 10px;
  box-shadow: 0 20px 30px 0 rgba(0,0,0,0.10);
  overflow: hidden;
  @media (max-width: 600px) {
    margin: 1em 0.5em;
  }
`

Paper.defaultProps = {
	theme: {
		colors:{
      background:"#FFF"
    },
    spacing:{
      paper:"6em"
    }
	}
}

export default Paper
