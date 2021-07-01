const REMOVE_TASK = 'REMOVE_TASK';

const removeTaskAction = (taskIndex) => ({
  type: REMOVE_TASK,
  taskIndex,
})

export default removeTaskAction;
