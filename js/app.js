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
	var app = angular.module ('book', ['ui.directives','ui.filters']);
	
	app.controller('BookController', function(){
		this.contacts = allContacts;
		this.current = 0;
		this.selectedGroup = "";

		this.isGroupinContact = function (contact) {
			return !!contact.group;
		}
		
		this.setGroup = function (contact) {
			this.selectedGroup = contact.group;
		}

		this.noGroup = function () {
			this.selectedGroup = "";
		}

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
			this.isAddContact = !this.isAddContact;
			var inputs = document.getElementsByClassName('add-contact__field');
			inputs.removeClass

		}

		this.isEdit = false;
		this.editContact = function() {
			this.isEdit = true;
			document.getElementsByClassName('add-contact__header')[0].innerHTML="<h1>Edit Contact</h1>";
			var inputs = document.getElementsByClassName('add-contact__field');
			inputs[0].value = this.contacts[this.current].name;
			inputs[1].value = this.contacts[this.current].phone;
			inputs[2].value = this.contacts[this.current].email;
			if (!((typeof this.contacts[this.current].group)==="undefined")) {
				inputs[3].value = this.contacts[this.current].group;
			}
		};

		this.changeContact = function() {
			var inputs = document.getElementsByClassName('add-contact__field');
			this.contacts[this.current].name = inputs[0].value;
			this.contacts[this.current].phone = inputs[1].value;
			this.contacts[this.current].email = inputs[2].value;
			if (inputs[3].value) {
				this.contacts[this.current].group = inputs[3].value;
			}
			document.getElementsByClassName('add-contact__header')[0].innerHTML="<h1>Add Contact</h1>";
			this.isEdit = false;
			for (var i=0; i<4; i++) {
				inputs[i].value="";
			}
		}
	});
	
	app.controller('GroupController', function(){
		this.view = false;

		this.isGroups = function () {
			return this.view;
		}; 

		this.setGroups = function () {
			this.view = !this.view;
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