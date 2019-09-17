import React from 'react';
import axios from 'axios';
import Todolist from './Todolist/Todolist'
import PostItem from './PostItem/PostItem'
import './styles.css'
const Fragment = React.Fragment;
// const  api_url ="todo/"
// import cors from 'cors';

 // axios.defaults.baseURL = 'http://localhost:3000';
 // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
 // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			items:[]
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount(){
		fetch("http://localhost:8080/todo/todolist")
		.then(function(response) {
    		return response.json();
  		})
		.then((data)=>{
			this.setState({items: data.item});
			console.log(this.state.items);
		})
	}

	onSubmit(){
	    fetch("http://localhost:8080/todo/todolist")
	    .then(function(response) {
    		return response.json();
  		})
		.then((data)=>{
			this.setState({items: data.item});
			console.log(this.state.items);
		})
  	}

	render(){
		return(
			<div className="bg-white rounded-lg p-6 ">
				<PostItem onSubmit={this.onSubmit}/>
				<Todolist tasks={this.state.items} onSubmit={this.onSubmit}/>
			</div>
		);
	}
}
