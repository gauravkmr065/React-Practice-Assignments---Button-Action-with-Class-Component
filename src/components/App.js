import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	     this.state = {str: ''}
	};
   
    render() {
    	return(
    		<div id="main">
		{this.state.str=='b' &&(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}    
            <button id="click" onClick={()=>this.setState({str:'b'})}>Click Me</button>
    		</div>
    	);
    }
}


export default App;

