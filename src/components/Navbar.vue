<template>
	<b-navbar toggleable="lg" type="dark" variant="dark">
		<div id="logo">
				<img
					src="../_assets/logo3.png"
					alt="logo"
					class="navbar-brand app-logo"
				/>
				</div>
				<div class="dropdown">
					<button class="dropbtn bg-secondary">Categories</button>
					<div class="dropdown-content">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>
				<div class="dropdown">
					<button class="dropbtn bg-secondary">Dates</button>
					<div class="dropdown-content">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>
				<div>
				<b-form inline class="ml-4">
          <label for="sort" class="text-secondary mr-2">Sort by</label>
            <b-input-group>
              <b-form-select id="sortParam" v-model="sortParam">
                <option value="ingredientId" selected>Priority</option>
                <option value="shelfLife">Status</option>
                <option value="availableQuantity">Available quantity</option>
                <option value="expiredQuantity">Expired quantity</option>
                <option value="usedQuantity">Used quantity</option>
                <option value="orderedQuantity">Ordered quantity</option>
              </b-form-select>
              <template #append>
                <b-button class="btn btn-secondary" @click="sortAsc = !sortAsc">
                  <b-icon v-if="sortAsc" icon="chevron-up"></b-icon>
                  <b-icon v-else icon="chevron-down"></b-icon>
                </b-button>
              </template>
            </b-input-group>
        </b-form>
        </div>
	</b-navbar>
</template>

<script>
export default {
	name: "Navbar",

	data() {
		return {};
	},
};
</script>

<style lang="css" scoped>
.app-logo {
	max-height: 40px;
	max-width: 40px;
	margin-bottom: 3px;
	padding-left: 10px;
}

.dropbtn {
	/*background-color: #4caf50;*/
	color: white;
	padding: 10px 20px;
	font-size: 16px;
	border: none;
	cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
	position: relative;
	display: inline-block;
	margin-left: 50px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
	display: none;
	position: absolute;
	background-color: #ededed;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
	background-color: #d6d6d6;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
	display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
	background-color: #3e8e41;
}
</style>
