const product = new Vue({
	el: '#products-content',
	data: {
		gridOrList: 'Grid View',
		view: false,
		carType: 'Carro',
		advancedSearch: false,
		windowWidth: window.innerWidth,
		formSidebar: true
	},
	mounted() {
	    window.onresize = () => {
	        this.windowWidth = window.innerWidth
	     }
	},
	computed: {
		gridOrList2 () { 
			return this.gridOrList === "List View" ? "list-view" : "grid-view"
		},
		listView() {
			if (this.gridOrList === "List View") {
				return true
			}
		},
		mobileShowSearch() {
	    	return this.windowWidth <= 767
	    },
	    algoSeOculta() {
	    	if (this.windowWidth <= 767)
		    	return this.formSidebar = false
		    else
		    	return this.formSidebar = true
	    }

	},
	methods: {
		advancedSearchShow() {
			this.advancedSearch = !this.advancedSearch
		},
		show() {
	    	this.formSidebar = !this.formSidebar
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
	el: '#global-tabs',
	data: {
		activetab: 1
	}
})