function MainController($scope) {
  $scope.name = 'Matthew Cianciolo!';
}

angular
  .module('app')
  .controller('MainController', MainController);