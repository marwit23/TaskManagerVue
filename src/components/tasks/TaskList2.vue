<template>
  <div id="container1" class="bg-light full-height ml-n3">
    <b-row class="mt-2 mx-2" v-show="addTask === true">
      <b-card id="add-task-card" class="card list-complete-item mb-1 w-100">
        <b-row> </b-row>
        <b-row>
          <TaskActions />
        </b-row>
      </b-card>
    </b-row>

    <b-row class="pt-2 mx-2">
      <draggable
        v-model="items"
        @start="drag = true"
        @end="drag = false"
        ghost-class="ghost"
        class="w-100"
      >
        <transition-group name="list-complete">
          <b-card
            id="task-card"
            class="card list-complete-item mb-1 w-100"
            v-for="item in items"
            :key="item.title"
          >
            <b-row>
              <b-col sm="1">
                <b-button
                  :disabled="show"
                  variant="outline-light btn-sm"
                  @click="item.showActions = !item.showActions"
                >
                  <b-icon icon="layers-fill"></b-icon>
                </b-button>
              </b-col>
              <b-col id="task-text">
                {{ item.title }}
              </b-col>
            </b-row>
            <b-row v-show="item.showActions === true">
              <TaskActions />
            </b-row>
          </b-card>
        </transition-group>
      </draggable>
    </b-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskActions from "./TaskActions.vue";
export default {
  name: "TaskList",
  components: {
    draggable,
    TaskActions,
  },

  data() {
    return {
      addTask: false,
      items: [
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
        {
          id: 0,
          title: "Task Manager Example Task",
          list: 1,
          showActions: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    showOverlay(item) {
      item.overlay = true;
    },
    hideOverlay(item) {
      item.overlay = false;
    },
  },
};
</script>

<style lang="css" scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

#task-card:hover {
  cursor: grab;
}

</style>
