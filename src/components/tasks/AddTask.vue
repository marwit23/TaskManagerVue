<template>
  <div>
	<b-row class="mt-3 ml-1 mb-2">
                <!-- TIME -->
                <button class="btn btn-light btn-sm">ALL</button>
                <button class="btn btn-light ml-2 btn-sm">Single</button>
                <button class="btn btn-light ml-2 btn-sm">Planned</button>
                <button class="btn btn-light ml-2 btn-sm">Recurring</button>
                <button class="btn btn-light ml-2 btn-sm">Still</button>

                <!-- TYPE -->
                <button class="btn btn-light btn-sm">Task</button>
                <button class="btn btn-light ml-2 btn-sm">Call</button>
                <button class="btn btn-light ml-2 btn-sm">Meeting</button>
                <button class="btn btn-light ml-2 btn-sm">Payment</button>
                <button class="btn btn-light ml-2 btn-sm">Shopping List</button>
                <button class="btn btn-light ml-2 btn-sm">Project</button>
                <button class="btn btn-light ml-2 btn-sm">Note</button>
              </b-row>
              <b-row>
                <b-form-input
                  placeholder="New task"
                  class="mb-2 mr-sm-2 d-inline-flex"
                >
                </b-form-input>
              </b-row>
              <b-row>
                <button class="btn btn-outline-secondary ml-2 btn-sm">
                  Now
                </button>
                <button class="btn btn-outline-warning ml-2 btn-sm">
                  Wait
                </button>
                <button class="btn btn-outline-danger ml-2 btn-sm">
                  Later
                </button>
              </b-row>
              <b-row>
                All, Single, Monthly, Weekly, Daily, Still
              </b-row>
              <b-row>
                Personal, Work
              </b-row>
              </div>
</template>

<script>
export default {

  name: 'AddTask',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>