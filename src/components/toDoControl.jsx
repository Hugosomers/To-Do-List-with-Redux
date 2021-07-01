import React, { Component } from 'react'
import { connect } from 'react-redux';
import addTask from '../actions/addTask'

class ToDoControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: '',
    }

    this.inputHandle = this.inputHandle.bind(this);
  }

  inputHandle({ target }) {
    const { value } = target;
    this.setState({
      taskInput: value,
    })
  }

  render() {
    const { addDispatch, taskCount } = this.props;
    const { taskInput } = this.state;
    return (
      <div>
        <h3>Tem um total de {taskCount} tasks! </h3>
        <input type="text" placeholder="Digite sua task" onChange={(e) => this.inputHandle(e)}/>
        <button type="button" onClick={() => addDispatch(taskInput)}>Adicionar</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDispatch: (tasks) => dispatch(addTask(tasks)),
});

const mapStateToProps = (state) => ({
  taskCount: state.listReducer.taskCount,
})


export default connect(mapStateToProps, mapDispatchToProps)(ToDoControl)
