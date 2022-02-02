import Clock from './Clock'
import Text from './Text'
import List from './List'

const Ramp = ({ input }) => {
  // Note: if input prop not initiated on component, the prop is falsy, return Clock
  if (!input) {
    return <Clock />;
  } else if (Array.isArray(input)) {
    return <List input={ input }/>;
  } else {
    return <Text input={ input }/>;
  } 
}

export default Ramp;
