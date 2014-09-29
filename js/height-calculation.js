var addContactsListScroll = function() {
	var contactsListHeight;
	var panelSearch = document.getElementsByClassName('panel__search')[0];
	var	panelHeader = document.getElementsByClassName('panel__header')[0];
	var	groupsList = document.getElementsByTagName('groups-list')[0];
	var	contactsList = document.getElementsByTagName('contacts-list')[0];
	var panelButtons = document.getElementsByClassName('panel__buttons')[0];
		Element.prototype.getElementHeight = function() {
			if (typeof this.clip !== "undefined") {
				return this.clip.height;
			} else {
				if (this.style.pixelHeight) {
					return this.style.pixelHeight;
				} else {
					return this.offsetHeight;
				}
			}
		};
		var contactsScrollHeight = document.body.getElementHeight();
		console.log(contactsScrollHeight);
		contactsScrollHeight -= (panelSearch.getElementHeight()+2*panelHeader.getElementHeight()+
			panelButtons.getElementHeight()+10);
		console.log(contactsScrollHeight);
		panelHeader.click();
		//contactsScrollHeight -= groupsList.getElementHeight();
		panelHeader.click();
		console.log(contactsScrollHeight);
		if (contactsList.getElementHeight()>contactsScrollHeight) {
			document.getElementsByClassName('panel__contacts')[0].style.height=contactsScrollHeight+"px";
		}
		console.log(document.getElementsByClassName('panel__contacts')[0]);
};