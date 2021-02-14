import axios from 'axios'

const serverUrl = 'http://http://localhost:8080'
const tasks = 'api/tasks'
const tasksUrl = `${serverUrl}/${tasks}`

export default {

	async getAllTasks({ commit }) {
        const response = await axios.get(
            tasksUrl
        );
        console.log(response)
        commit('setTasks', response.data)
    },

    async addTask({ commit }, task) {
        const response = await axios({
            method: 'post',
            url: tasksUrl,
            data: task,
            // auth: {
            //     username: 'admin',
            //     password: 'admin'
            // }
        })
        console.log(response.data)
        commit('newTask', response.data);
    },

    async deleteTask({ commit }, task) {
        await axios({
            method: 'delete',
            url: `${tasksUrl}/${task.taskId}`,
            // auth: {
            //     username: 'admin',
            //     password: 'admin'
            // }
        });
        commit('deleteTask', task.taskId);
    },

    async editTask({ commit }, task) {
        const response = await axios({
            method: 'put',
            url: `${tasksUrl}/${task.taskId}`,
            data: task,
            // auth: {
            //     username: 'admin',
            //     password: 'admin'
            // }
        });
        console.log(response.data)
        commit('updateTask', response.data);
    },



}