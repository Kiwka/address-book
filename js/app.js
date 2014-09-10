(function () {
	var allContacts = [
		{
			name: "John Doe",
			phone: "0567893",
			email: "johndoe@google.com",
			group: "Men",
			image: 'img/default.png',
			number: 0
		},
		{
			name: "Mary Ann",
			phone: "567489",
			email: "maryann@google.com",
			image: 'img/default.png',
			number: 1
		},
		{
			name: "Ann Buy",
			phone: "444455",
			email: "annbuy@google.com",
			group: "Family",
			image: 'img/default.png',
			number: 2
		}
	]
	var app = angular.module ('book', []);
	
	app.controller('BookController', function(){
		this.contacts = allContacts;
		this.current = 0;
		this.selectContact = function (setContact) {
			this.current = setContact;
		};
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