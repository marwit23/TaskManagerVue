<template>
  <div class="ml-2 mt-2">
    <nav>
      <b-button variant="warning" @click="addTask = !addTask" class="m-3">+</b-button>
      <ul class="list-unstyled ml-1">
        <router-link
          to="/tasks"
          class="nav-link"
          exact-active-class="exact-active"
          ><li class="text-secondary">
            <b-icon icon="list-task"></b-icon>
            <p class="font-tiny">Task</p>
          </li></router-link
        >
        <router-link
          to="/admin/recipes"
          class="nav-link"
          exact-active-class="exact-active"
          ><li class="text-secondary">
            <b-icon icon="telephone-fill"></b-icon>
            <p class="font-tiny">Call</p>
          </li></router-link
        >
        <router-link
          to="/admin/deliveries"
          class="nav-link"
          exact-active-class="exact-active"
          ><li class="text-secondary">
            <b-icon icon="person-fill"></b-icon>
            <p class="font-tiny">Meeting</p>
          </li></router-link
        >
        <router-link
          to="/admin/deliveries"
          class="nav-link"
          exact-active-class="exact-active"
          ><li class="text-secondary">
            <b-icon icon="cash"></b-icon>
            <p class="font-tiny">Payment</p>
          </li></router-link
        >
        <router-link
          to="/admin/deliveries"
          class="nav-link"
          exact-active-class="exact-active"
          ><li class="text-secondary">
            <b-icon icon="basket3-fill"></b-icon>
            <p class="font-tiny">Shopping</p>
          </li></router-link
        >
        <router-link
          to="/admin/deliveries"
          class="nav-link"
          exact-active-class="exact-active"
          ><li class="text-secondary">
            <b-icon icon="calendar-range-fill"></b-icon>
            <p class="font-tiny">Planner</p>
          </li></router-link
        >
        <router-link
          to="/admin/deliveries"
          class="nav-link"
          exact-active-class="exact-active"
          ><li class="text-secondary">
            <b-icon icon="folder-fill"></b-icon>
            <p class="font-tiny">Project</p>
          </li></router-link
        >
        <router-link
          to="/admin/deliveries"
          class="nav-link"
          exact-active-class="exact-active"
          ><li class="text-secondary">
            <b-icon icon="file-text-fill"></b-icon>
            <p class="font-tiny">Note</p>
          </li></router-link
        >
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  components: {},

  data() {
    return {};
  },

  methods: {},

  computed: {},
};
</script>

<style></style>
