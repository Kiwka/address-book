var addContactsListScroll = function(isGroupsView) {
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
	contactsScrollHeight -= (panelSearch.getElementHeight()+2*panelHeader.getElementHeight()+
		panelButtons.getElementHeight()+10);

	// changing height if the groups list is shown
	if (isGroupsView) {
		contactsScrollHeight -= groupsList.getElementHeight();
	};
	//if (contactsList.getElementHeight()>contactsScrollHeight) {
		document.getElementsByClassName('panel__contacts')[0].style.height=contactsScrollHeight+"px";
	//};
	//if (!isGroupsView) {
	//	document.getElementsByClassName('panel__contacts')[0].style.height=contactsScrollHeight+"px";
	//}
};