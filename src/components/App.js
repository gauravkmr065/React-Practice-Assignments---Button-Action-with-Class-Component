import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	     this.state = {str: ''}
	    this.showPara=this.showPara.bind(this);
	};
    showPara(){
		 console.log("click");
        let paradata = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.";
	   this.setState({str:paradata});
    }

    render() {
    	return(
    		<div id="main">
		     <p id="para">{this.state.str}</p>
            <button id="click" onClick={this.showPara}>Click Me</button>
    		</div>
    	);
    }
}


export default App;

