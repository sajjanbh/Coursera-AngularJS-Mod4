(function () {
'use strict';

angular.module('MenuApp', ['data', 'ui.router'])
.controller('MenuDataController', MenuDataController)
.controller('MenuDataItemsController', MenuDataItemsController)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

angular.module('MenuApp')
.config(function() {
  //console.log("MenuApp config Fired.");
})
.run(function() {
  //console.log("MenuApp run fired. ");
});

MenuDataController.$inject = ['categories'];
function MenuDataController(categories) {
  var menu = this;
  menu.categories = categories.data;
}

MenuDataItemsController.$inject = ['items'];

function MenuDataItemsController(items) {
	var itemList = this;
	
	itemList.items = items.data.menu_items;
}

})();
