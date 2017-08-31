import Row from './row'
import Display from '../text/display'

export default ({title,children}) => (
  <div>
    <Row>
      <Display>{title}</Display>
    </Row>
    {children}
  </div>
)
