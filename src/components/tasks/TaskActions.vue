<template>
	<div class="float-right">
		<b-button
			variant="outline-warning btn-sm ml-2"
			v-b-tooltip.focus.bottom
			title="Add task"
			><b-icon icon="plus"></b-icon
		></b-button>
		<b-button
			variant="outline-secondary btn-sm ml-2"
			v-b-tooltip.focus.bottom
			title="Add subtask"
			><b-icon icon="plus"></b-icon
		></b-button>
		<b-button
			variant="outline-secondary btn-sm ml-2"
			v-b-tooltip.focus.bottom
			title="Add time"
			><b-icon icon="clock-fill"></b-icon
		></b-button>
		<b-button
			variant="outline-secondary btn-sm ml-2"
			v-b-tooltip.focus.bottom
			title="Add category"
			><b-icon icon="card-text"></b-icon
		></b-button>
		<b-button
			variant="outline-secondary btn-sm ml-2"
			v-b-tooltip.focus.bottom
			title="Priority"
			><b-icon icon="flag"></b-icon
		></b-button>
				<b-button
			variant="outline-danger btn-sm ml-2"
			v-b-tooltip.focus.bottom
			title="Abandon"
			><b-icon icon="trash"></b-icon
		></b-button>
		<b-button
			variant="outline-success btn-sm ml-2"
			v-b-tooltip.focus.bottom
			title="Complete"
			><b-icon icon="check2"></b-icon
		></b-button>
		<b-button
			variant="btn-sm ml-4"
			v-b-tooltip.focus.bottom
			title="Close"
			><b-icon icon="x-square"></b-icon
		></b-button>
	</div>
</template>

<script>
export default {
	name: "TaskActions",

	data() {
		return {};
	},
};
</script>

<style lang="css" scoped></style>
