<template>
  <div>
    <Navbar />
    <b-row>
      <b-col sm="1" class="bg-dark">
        <Navigation3 />
      </b-col>
      <b-col>
        <router-view />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Navigation3 from "./components/Navigation3.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Navigation3,
  },
  computed: {
    ...mapGetters(["allTasks"]),
  },
  methods: {
    ...mapActions(["getAllTasks"]),
  },
  // created() {
  //   this.getAllTasks();
  // },
};
</script>

<style>
.app-message {
  margin-top: 50px;
}

.app-happy {
  max-height: 50px;
  max-width: 50px;
  margin-bottom: 25px;
}

.border-bottom {
  border-bottom: 1px solid gray;
}

.border-top-hidden {
  border-top: hidden;
}

.custom-width-1 {
  max-width: 80%;
}

.text-small {
  font-size: 85%;
}
.full-height {
  height: 90vh;
}
.font-tiny {
  font-size: 60%;
}
</style>
