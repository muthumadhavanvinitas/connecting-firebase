import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'
import App from './App';
import Names from './Names'
import About from './About'

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
	<Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/hello" component={Names}/>
    <Route path="/vinitas" components={About}/>
    <Route path="/login" components={Login}/>
      
    
  </Router>
  ), document.getElementById('root')
);
