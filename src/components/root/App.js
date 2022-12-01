import React, { Component } from 'react'
import '../../App.css'
import Input from '../input/Input'
import Task from '../task/Task'

export default class App extends Component {
  state = { tasks: [] }
  copyOfTasks = [];
  taskHandler = (input, option) => {
    if (option === 'all' && input !== '') {
      let id = Math.floor(Math.random() * 10000);
      this.state.tasks.forEach(el => { if (el.id === id) Math.floor(Math.random() * 1000) })
      this.setState({ tasks: [...this.state.tasks, { id: id, task: input, done: false }] });
      this.copyOfTasks = [...this.state.tasks];
    }
  }

  removeTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) })
    this.copyOfTasks = this.copyOfTasks.filter(task => task.id !== id);
  }

  doneTask = (id) => {
    this.state.tasks.forEach(element => {
      if (id === element.id) element.done = !element.done;
    })
    this.setState({})
  }

  filterTask = (option) => {
    this.setState({ tasks: [...this.state.tasks, { id: Math.floor(Math.random() * 10000), task: 'salam', done: false }] });
    switch (option) {
      case 'done': this.setState({ tasks: this.copyOfTasks.filter(task => task.done === true) }); break
      case 'notdone': this.setState({ tasks: this.copyOfTasks.filter(task => task.done !== true) }); break
      default: this.setState({ tasks: this.copyOfTasks });
    }
  }

  render() {
    return (
      <div className='App'>
        <Input taskHandler={this.taskHandler} filterTask={this.filterTask} />
        <Task tasks={this.state.tasks} removeTask={this.removeTask} doneTask={this.doneTask} />
      </div>
    )
  }
}
