angular.module('quoteBook').controller('mainCtrl', function ($scope, dataServices){
$scope.quotes = dataServices.getQuotes();
$scope.deleteMe = function(){
  $scope.quote = '';
}
})
