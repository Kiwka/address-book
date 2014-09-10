(function () {
	var allContacts = [
		{
			name: "John Doe",
			phone: "0567893",
			group: "Men",
			image: 'img/default.png'
		},
		{
			name: "Mary Ann",
			phone: "567489",
			image: 'img/default.png'
		},
		{
			name: "Ann Buy",
			phone: "444455",
			group: "Family",
			image: 'img/default.png'
		}
	]
	var app = angular.module ('book', []);
	
	app.controller('BookController', function(){
		this.contacts = allContacts;
		this.current = 0;
	});
	
	app.controller('PanelController', function(){
		this.tab=1;
		this.selectTab = function (setTab) {
			this.tab = setTab;
		};
		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		}
	});

})();