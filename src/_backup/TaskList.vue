<!-- <template>
  <div id="container1" class="bg-light full-height">
    <div class="bg-dark">
      <b-button v-b-modal.add-todo-modal variant="warning">+</b-button>
    </div>
    <div id="container2" class="ml-2 mr-2">
      <b-row id="po-chuj" class="mt-2" align-v="center">
        <b-col id="tasks">
          <div
            id="drop-area"
            class="drop-zone"
            @drop="onDrop($event, 1)"
            @dragover.prevent
            @dragenter.prevent
          >
            <b-card
              id="task-card"
              class="card list-complete-item"
              v-for="item in listOne"
              :key="item.title"
              draggable
              @dragstart="startDrag($event, item)"
            >
              <b-row>
                <b-col id="task-text">
                  {{ item.title }}
                </b-col>
                <TaskActions />
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col id="add-task" sm="1"
          ><b-button variant="outline-secondary">+</b-button></b-col
        >
      </b-row>
    </div>
  </div>
</template>

<script>
import TaskActions from "./TaskActions.vue";
export default {
  name: "TaskList",
  components: {
    TaskActions,
  },

  data() {
    return {
      items: [
        {
          id: 0,
          title: "Menu po lewej w formie ikon",
          list: 1,
        },
        {
          id: 1,
          title: "Draggable",
          list: 1,
        },
        {
          id: 2,
          title: "Dodawanie tasków",
          list: 1,
        },
      ],
    };
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
  },
  methods: {
    startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },

    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
    },
  },
};
</script>

<style lang="css" scoped>
.drop-zone {
  margin-bottom: 10px;
  padding: 10px;
}
</style>
 -->