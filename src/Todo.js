import React, { Component } from 'react';
import './bulma.css'
export class Todo extends Component{


	state={
		value:' '

	}

	savingValue= (event)=> {
		this.setState({value:event.target.value});

	}
	


render(){
	var box = [];
	for (var i = 0; i < this.state.value; i++) {
		box.push(
			<div className="column notification is-primary has-text-centered">
			<div className="notification is-danger">Hello</div></div>

			);
		
	}
	return ( 
		<div>
		<div>
			<select onChange={this.savingValue} value={this.state.value}>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
			<h1>{this.state.value}</h1> 
			{box}
 		</div>
		
		</div>




	        );
		}
}