import Row from './row'
import Display from '../text/display'
import {Link,Element} from 'react-scroll'

export default ({title,children,name}) => (
  <Element name={name}>
    <div>
      <Row>
        <Display>{title}</Display>
      </Row>
      {children}
    </div>
  </Element>
)
