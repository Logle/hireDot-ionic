angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ProjectsCtrl', function($scope, $http) {
  $scope.projects = [];
  $scope.getData = $http.get('http://localhost:2200/api/projects').success(function(data, status, headers, config){
    var i;
    var placeholder = {
      original: 'http://www.hollywoodreporter.com/sites/default/files/imagecache/thumbnail_570x321/2014/07/interstellar.jpg'
    }
    console.log('project: ',data);
    for (i=0; i< data.length; i++){
      $scope.projects[i] = data[i];
      if ($scope.projects[i].images[0] == null) {
        $scope.projects[i].images[0] = placeholder;
      };
    };
  });
})
.controller('ProjectCtrl', function($scope, $stateParams) {


})

.controller('DevelopersCtrl', function($scope, $http) {
  $scope.developers = [];
  $scope.getData = $http.get('http://localhost:2200/api/users').success(function(data, status, headers, config){
    var i;
    var placeholder = {
      original: 'http://www.shirts4geek.com/blog/wp-content/uploads/2014/01/coder-boy456789.jpg'
    }
    console.log('users: ',data);
    for (i=0; i< data.length; i++){
      $scope.developers[i] = data[i];
      if ($scope.developers[i].profilePicture == null) {
        $scope.developers[i].profilePicture = placeholder;
      };
    };
  });
})

.controller('DeveloperCtrl', function($scope, $stateParams) {

});
