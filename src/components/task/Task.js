import React, { Component } from 'react'

export default class Task extends Component {

  render() {
    return (
      <div className='Tasks'>
        <ul>
          {
            this.props.tasks.map(task => (
              (task.task !== '') ?
                <li className='task' key={task.id} 
                style={{textDecoration : task.done ? 'line-through' : 'none'}}>
                  {task.task}
                  <i className="fa-solid fa-trash" onClick={() => this.props.removeTask(task.id)}></i>
                  <i className="fa-solid fa-check"
                    onClick={() => this.props.doneTask(task.id)}></i>
                </li> : ''
            ))
          }
        </ul>
      </div>
    )
  }
}
