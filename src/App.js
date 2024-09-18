
import {Heading,CustomButton,Container} from './styledComponents';
import {Component} from 'react'
class App extends Component{
render(){
  return(
    <Container>
      <Heading>hii madhu</Heading>
      <CustomButton type="button">click here</CustomButton>
      
      <CustomButton type="button" outline>click here</CustomButton>
    </Container>
  )
}
}
export default App