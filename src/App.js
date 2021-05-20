import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component.js"
import dusc from "./components/task-list.component";
import EditTasks from "./components/edit-task.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={dusc} />
        <Route path="/edit/:id" component={EditTasks} />
        <Route path="/create" component={CreateTask} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
 