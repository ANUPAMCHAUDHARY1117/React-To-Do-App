import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addRandomNumber = this.addRandomNumber.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  deleteEntry(event){
     var deleteNodeId = event.target.getAttribute('data_id');
     var newArray = this.state.tasks.slice();
     for(var i=0 ;i<newArray.length;i++){
       if(newArray[i][1] == deleteNodeId){
         newArray.splice(i,1);
       }
     }
     this.setState({tasks : newArray});
     event.preventDefault();
  }

  addRandomNumber() {
    return parseInt(Math.random() * 1000000000000);
  }

  handleChange(event) {
    this.setState({ task: event.target.value })
  }

  handleSubmit(event) {
    var newArray = this.state.tasks.slice();
    newArray.push([this.state.task,this.addRandomNumber()]);
    this.setState({ tasks: newArray });
    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            To Do Task List:
        <input type="text" value={this.state.task} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
        <div className="heading"><h1>To Do List</h1>
        <ul>{this.state.tasks.map((item) => <List task={item[0]} deleteEntry={this.deleteEntry} key={this.addRandomNumber()} id={item[1]}/>)}</ul>
        </div>
      </div>
    );
  }
}

export default App;
