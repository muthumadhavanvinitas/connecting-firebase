import React, { Component } from 'react';
import Names from './Names';
 import { Button, Checkbox, Form,Segment } from 'semantic-ui-react'
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
    <Form onSubmit={this.addMessage.bind(this)}>
      
        <Form.Input label='First name'  placeholder='First name' ref={ el => this.inputEl = el }/>
        <Form.Input label='Last name' placeholder='Last name'  ref={ el => this.inputEle = el }/>
        <label>Address</label><textarea>
  Hello there, this is some text in a text area
</textarea>
         <Link to="/hello/"><Form.Button color='green' content="Submit"/></Link>
        
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
