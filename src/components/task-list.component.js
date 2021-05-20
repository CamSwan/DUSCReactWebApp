import React, { Component } from 'react';

import axios from 'axios';



export default class TasksList extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);

    this.state = {tasks: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tasks/')
      .then(response => {
        this.setState({ tasks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTask(id) {
    axios.delete('http://localhost:5000/tasks/'+id)
      .then(res => console.log(res.data));
       
    this.setState({
      tasks: this.state.tasks.filter(el => el._id !== id)
    })
  }

  

  render() {
    return (
      <div>
        <h3>Logged Tasks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Points</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { <text>hello</text> }
          </tbody>
        </table>
      </div>
    )
  }
}