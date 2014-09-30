(function () {
	var app = angular.module ('book', ['ui.directives','ui.filters']);
	var book;

	app.directive('contactsList', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmp/contacts-list.html'
		};
	});

	app.directive('groupsList', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmp/groups-list.html'
		};
	});

	app.directive('contactForm', ['$timeout', function ($timeout) {
		return {
			restrict: 'E',
			templateUrl: 'tmp/contact-form.html',
			controller: function () {
				this.contact = {};
				this.changeContactsListHeight = function () {
					if(!(document.getElementsByClassName('panel__groups ng-hide')[0])) {
						$timeout(function () {
							addContactsListScroll(true)}
						, 300);
					}
				};
				this.addContact = function () {
					this.contact.image = 'img/default.png';
					this.contact.number=book.contacts.length;
					book.contacts.push(this.contact);
					this.contact = {};
					this.changeContactsListHeight();
				};
			},
			controllerAs: 'contactCtrl'
		};
	}]);
	
	app.directive('contactView', function () {
		return {
			restrict: 'E',
			templateUrl: 'tmp/contact-view.html'
		};
	});

	app.controller('BookController', ['$http', '$timeout', function($http, $timeout){
		book = this;
		book.contacts=[];	
		this.current = 0;
		this.selectedGroup = "";
		$http.get('contacts/contacts.json').success(function (data) {
			book.contacts = data;
		}) ;
		this.filteredContacts= this.contacts;

		//"Group" panel functions
		this.isGroupinContact = function (contact) {
			return !!contact.group;
		}
		
		this.setGroup = function (contact) {
			this.selectedGroup = contact.group;
		}

		this.isGroupSelected = function (checkGroup) {
			return this.selectedGroup === checkGroup;
		};

		this.noGroup = function () {
			this.selectedGroup = "";
		}

		this.selectContact = function (setContact) {
			this.current = setContact;
		};
		
		this.isSelected = function (checkContact) {
			return this.current === checkContact;
		};

		this.changeContactsSet = function () {
			if (this.filteredContacts[0]) {
				this.current = this.filteredContacts[0].number;
			}
		}
		
		this.removeContact = function () {
			var current = this.current;
			var length = this.contacts.length;
			var index = function () {
				for (var i=0; i<length; i++) {
					if (book.contacts[i].number===current) {
						return i;
					}
				}
			}();
			for (i=index; i<length; i++) {
				this.contacts[i].number-=1;
			};
			book.contacts.splice(index,1);
			this.selectContact(book.contacts[0].number);
		};
		
		this.isAddContact = false;
		this.turnAddContact = function (){
			this.isAddContact = !this.isAddContact;
		}

		this.isEdit = false;
		this.editContact = function() {
			this.isEdit = true;
			document.getElementsByClassName('contact-form__header')[0].innerHTML="<h1>Edit Contact</h1>";
			var inputs = document.getElementsByClassName('contact-form__field');
			inputs[0].value = this.contacts[this.current].name;
			inputs[1].value = this.contacts[this.current].phone;
			inputs[2].value = this.contacts[this.current].email;
			if (!((typeof this.contacts[this.current].group)==="undefined")) {
				inputs[3].value = this.contacts[this.current].group;
			}
		};

		this.changeContact = function() {
			var inputs = document.getElementsByClassName('contact-form__field');
			this.contacts[this.current].name = inputs[0].value;
			this.contacts[this.current].phone = inputs[1].value;
			this.contacts[this.current].email = inputs[2].value;
			if (inputs[3].value) {
				this.contacts[this.current].group = inputs[3].value;
			}
			document.getElementsByClassName('contact-form__header')[0].innerHTML="<h1>Add Contact</h1>";
			this.isEdit = false;
			for (var i=0; i<4; i++) {
				inputs[i].value="";
			}
		};

		//Adding height for the contacts list. Without direct assignment, autoscroll is not working properly
		$timeout(function() {
			addContactsListScroll(false);
		}, 300);

	}]);
	
	app.controller('GroupController', ['$timeout', function($timeout){
		this.view = false;

		this.isGroups = function () {
			return this.view;
		}; 

		this.setGroups = function () {
			this.view = !this.view;
			var view = this.view;
			var height = this.height;
			$timeout( function () {
				addContactsListScroll(view);
			}, 300);
		}


	}]);

})();