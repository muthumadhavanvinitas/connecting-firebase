import React,{Component} from 'react';
import { Form,Button,Segment,Grid,Image,Advertisement,Rating,Card, Feed} from 'semantic-ui-react'
 
 class Login extends React.Component {
  state={
    data: {
      password: '',
      password: ''
    },
    loading: false,
    errors: {}
  }
  onChange = e =>
  this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value }
  })


  render(){
    const {  data } = this.state;

    return(
      <div><center><Image  src={require('/home/vinitas/Desktop/new1/src/v.jpg')}  
        href= 'http://www.vinitas saloon and spa.com'
        size='large'/> </center>
       <Card>
    <Card.Content>
      <Card.Header>
        Recent Activity
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='/home/vinitas/Desktop/new1/src/v.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              <a>Vinitas</a> You added <a>Madhavan Madhav</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
       
    </Card.Content>
  </Card> 
    
        
        



       <Form >
       <Segment inverted>
      
       <label htmlfor="email">Email</label>
       <input 
        type="email"
        id="email"
        name="email"
        placeholder="example@example.com"
        value={data.email}/>
        <label htmlfor="password">Password</label>
       <input 
        type="password"
        id="password"
        name="password"
        placeholder="Make  it secure"
        value={data.password}/>
        
        

        <Button primary>Login</Button>
        </Segment>

        </Form>
        <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />  

       
      </div>
      )
  }

 } 
 export default Login