import React, { Component } from 'react';
import Names from './Names';
 import { Button, Checkbox, Form,Segment,Modal,Icon} from 'semantic-ui-react'

import { Link } from  'react-router'
import fire from './fire';


class App extends Component {
 constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  handleSubmit(ev){
    alert('Welcome');
    ev.preventDefault(); 
  }
  
  addMessage(e){
    e.preventDefault(); 
    fire.database().ref('messages').push( this.inputEl.value );
    fire.database().ref('names').push( this.inputEle.value );
    this.inputEl.value = ''; 
    this.inputEle.value = '';
  }
  render() {
    return (
      <div>

    <Segment inverted>
    <Form>
      
        <Form.Input label='First name'  placeholder='First name' ref={ el => this.inputEl = el }/>
        <Form.Input label='Last name' placeholder='Last name'  ref={ el => this.inputEle = el }/>
        <label>Address</label><textarea>
  Hello there, this is some text in a text area
</textarea>
         <Link to="/hello/"><Form.Button color='green' content="Submit"/></Link>

 <Modal trigger={<Button color='green'>Save<Icon name='save' /></Button>} basic size='small'>
 <Modal.Content>
      <p>Your Details has been saved successfully</p>
    </Modal.Content>
     <Modal.Actions>
      <Button basic color='green' onClick={this.handleSubmit}>
        <Link to="/hello/"><Icon name='checkmark' /> Done</Link>
      </Button>
      
    </Modal.Actions>
  </Modal>
         
        
      <Form.Checkbox label='I agree to the Terms and Conditions' />
       <ol>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )

          }

        </ol>
        
    </Form>
    
    </Segment>
    </div>

      
       

            
       
      
      


    );
  }
}

export default App;
