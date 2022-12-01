import React, { Component } from 'react'
import '../../App.css'

export default class Input extends Component {
  state = { input: '', status: 'all' }

  onChangeHandler = (e) => {
    this.setState({ input: e.target.value })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
  }

  clearText = () => {
    this.setState({ input: '' })
  }

  selectHandleChange = (e) => {
    this.setState({status: e.target.value})
    this.props.filterTask(e.target.value);
  }

  render() {
    return (
      <div className='Input'>
        <h2>To-Do List</h2>
        <div className="d-flex">
          <div className="taskValue">
            <form onSubmit={this.onSubmitHandler}>
              <div className="inputText">
                <input type="text"
                  value={this.state.input}
                  onChange={this.onChangeHandler} 
                  onKeyPress={(e) => e.key === 'Enter' ? this.props.taskHandler(this.state.input, this.state.status) : ''}
                />
                <button type='submit' onClick={this.clearText}>
                  <i className='fa-solid fa-plus' onClick={() => { this.props.taskHandler(this.state.input) }}></i>
                </button>
              </div>
            </form>
          </div>

          <div className="filterTask">
            <select onChange={this.selectHandleChange}>
              <option value="all">All</option>
              <option value="done">Done</option>
              <option value="notdone">Not done</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
