import React, { Component } from 'react'
import { connect } from 'react-redux'
import removeTaskAction from '../actions/removeTask';

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
    }
    this.selectHandle = this.selectHandle.bind(this);
  }

  selectHandle({ target }) {
    this.setState({
      filter: target.value,
    })
  }
  render() {
    const { tasks, removeTask } = this.props;
    return (
      <div>
        <select onChange={(e) => this.selectHandle(e)}>
          <option>Filtre as tasks</option>
          <option value="completed">Completas</option>
          <option value="done">Fazendo</option>
        </select>
        <ul>
          {tasks.map((task, index) => (
            <div key={index}>
              <li>{task}</li>
              <button onClick={() => removeTask(index)}>Apagar</button>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.listReducer.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskIndex) => dispatch(removeTaskAction(taskIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
