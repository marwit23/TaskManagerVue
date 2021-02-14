export default {

		setTasks: (state, tasks) => state.tasks = tasks,
    setTempTask: (state, task) => state.tempTask = task,
    newTask: (state, task) => state.tasks.unshift(task),
    deleteTask(state, id) {
        const index = state.tasks.findIndex(task => task.taskId === id)
        state.tasks.splice(index, 1)
    },
    updatetask: (state, task) => {
        const index = state.tasks.findIndex(theTask => theTask.taskId === task.taskId);
        state.tasks.splice(index, 1, task);
        console.log(task)
    },

}