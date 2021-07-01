const INITIAL_STATE = {
  tasks: [],
  taskCount: 0,
}

function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.tasks],
        taskCount: state.taskCount + 1,
      };
      case 'REMOVE_TASK':
        return {
          tasks: state.tasks.filter((task, index) => index !== action.taskIndex),
          taskCount: state.taskCount - 1,
        }
    default:
      return state;
  }
}

export default listReducer;