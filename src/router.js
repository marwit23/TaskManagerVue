import Vue from 'vue'
import Router from 'vue-router'
import TaskList2 from './components/tasks/TaskList2.vue'
// import AddTask from './components/tasks/AddTask.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '',
            name: 'tasks',
            component: TaskList2,
            // children: [{
            //         path: '/tasks/list',
            //         name: 'taskList',
            //         component: TaskList,
            //     },
            //     {
            //         path: '/tasks/add-task',
            //         name: 'addTask',
            //         component: AddTask
            //     }

            // ]
        }
    ]
})