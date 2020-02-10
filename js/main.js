const product = new Vue({
	el: '#products-content',
	data: {
		gridOrList: 'Grid View',
		view: false,
		advancedSearch: false
	},
	computed: {
		gridOrList2 () {
			if (this.gridOrList === "List View") {
				return 'list-view'
			} else {
				return 'grid-view'
			}
		},
		listView() {
			if (this.gridOrList === "List View") {
				return true
			}
		}
	},
	methods: {
		advancedSearchShow() {
			this.advancedSearch = !this.advancedSearch
		}
	}
})

const profile = new Vue({
	el: '#profile-admin-sidebar',
	data: {
		profileForm: false
	},
	methods: {
		showProfileForm() {
			this.profileForm = !this.profileForm
		}
	}
})

const publish = new Vue({
	el: '#form-publish',
	data: {
		activetab: 2
	}
})