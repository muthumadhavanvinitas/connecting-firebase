import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Checkbox, Form,Image,Statistic, Embed } from 'semantic-ui-react'

import fire from './fire';


class Names extends Component {
 constructor(props) {
    super(props);
    this.state = { names: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let namesRef = fire.database().ref('names').orderByKey().limitToLast(100);
    
    namesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let name = { text: snapshot.val(), id: snapshot.key };
      this.setState({ names: [name].concat(this.state.names) });

    })
  }

  
   render() {
    return (
      <div> <center><Link to="/vinitas"><Image  src={require('/home/vinitas/Desktop/new1/src/v.jpg')}  
        
        size='small'/></Link></center>
        <center><Link to="/vinitas"><Form.Button color='green' content="Click the button or image to visit Vinitas Site"/></Link></center>
<Statistic>
      <Statistic.Label>Views</Statistic.Label>
      <Statistic.Value><h3>40,509</h3></Statistic.Value>
    </Statistic>
<Embed
     icon='right circle arrow'
    placeholder='/home/vinitas/Desktop/images.png'
    url='http://www.myfav.es/jack'
  />
       
    </div>
      
       
    );
  }
}

export default Names;
