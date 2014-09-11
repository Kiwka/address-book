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
		},
		{
			name: "Dan Brang",
			phone: "43335",
			email: "danbrung@google.com",
			group: "Family",
			image: 'img/default.png',
			number: 3
		}

	]
	var app = angular.module ('book', []);
	
	app.controller('BookController', function(){
		this.contacts = allContacts;
		this.current = 0;
		
		this.selectContact = function (setContact) {
			this.current = setContact;
		};
		
		this.isSelected = function (checkContact) {
			return this.current === checkContact;
		};
		
		this.removeContact = function () {
			var current = this.current;
			var length = this.contacts.length;
			var index = function () {
				for (var i=0; i<length; i++) {
					if (allContacts[i].number===current) {
						return i;
					}
				}
			}();
			for (i=index; i<allContacts.length; i++) {
				this.contacts[i].number-=1;
				};
			allContacts.splice(index,1);
			this.selectContact(allContacts[0].number);
		};
		
		this.isAddContact = false;
		this.turnAddContact = function (){
			console.log(this.isAddContact);
			this.isAddContact = !this.isAddContact;
		}
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

	app.controller('AddContactController', function () {
		this.contact = {};
		this.addContact = function () {
			this.contact.image = 'img/default.png';
			this.contact.number=allContacts.length;
			allContacts.push(this.contact);
			this.contact = {};
		};
	})

})();