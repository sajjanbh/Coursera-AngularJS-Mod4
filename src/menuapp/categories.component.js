(function () {
'use strict';

angular.module('MenuApp')
.component('menuCategories', {
  templateUrl: 'src/menuapp/templates/menuapp.template.html',
  bindings: {
    categories: '<'
  }
});

})();
