import React,{Component} from 'react';


import { Button,Checkbox, Form,Image,Menu,icon,Rating} from 'semantic-ui-react'
 
import { Popup,Input, List,Step } from 'semantic-ui-react'
import { Link } from  'react-router'
import App from './App';
class ClickableStep extends Component {
  state = {}

  handleClick = () => this.setState({ active: !this.state.active })

  render() {
    return <Step {...this.props} active={this.state.active} onClick={this.handleClick} />
  }
}

	
export default class About extends App {
	 state = { activeItem: 'home' }

  handleItemClick = (<a href='http://www.google.com' />)

	

	render() {
		const { activeItem } = this.state
		return (

      <div>
        <Menu secondary>
         <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
         <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
         <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
         <Menu.Menu position='right'>
         <Menu.Item>
            <Input icon='search' placeholder='Search...' />
         </Menu.Item>
           <Link to="/login/"><Menu.Item name='Login' color='blue'/></Link>
        </Menu.Menu>
         </Menu><h3><font color="green"><center><Image  src={require('/home/vinitas/Desktop/new1/src/v.jpg')}  
          href= 'http://www.vinitas saloon and spa.com'
          size='large'/>
           Rate vinitas!! <Rating icon='star' defaultRating={3} maxRating={5} />
    
     </center> </font></h3>
      <List>
    <List.Item>
      <List.Icon name='users' />
      <List.Content>Vinitas Enterprises</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>K.K nagar, Madurai</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='https://www.google.co.in/search?q=vinitas&oq=vinitas&aqs=chrome..69i57j69i60j0j69i60j0l2.2872j0j7&sourceid=chrome&ie=UTF-8'>Vinitas Enterprises.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='https://www.google.co.in/search?q=vinitas&oq=vinitas&aqs=chrome..69i57j69i60j0j69i60j0l2.2872j0j7&sourceid=chrome&ie=UTF-8'>Vinitas enterprises</a>
      </List.Content>
    </List.Item>
  </List>
   <Step.Group>
      <Step active href='https://www.google.co.in/search?q=vinitas&oq=vinitas&aqs=chrome..69i57j69i60j0j69i60j0l2.2872j0j7&sourceid=chrome&ie=UTF-8' icon='user' title='Saloon and  DaySpa' description='Choose your Style' />
      <Step href='http://PayTM.com' icon='credit card' title='PayTM' description='VIsit PayTM' />
    </Step.Group>

    <br />

    <Step.Group>
      <ClickableStep icon='truck' title='Tours and Travels' description='Choose your Place and Book here' />
      <ClickableStep icon='credit card' title='PayTm' description='Visit and Online payment' />
    </Step.Group>

    <br />

   
        
         
            
          </div>
         
			)
	}
}