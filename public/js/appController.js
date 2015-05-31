<<<<<<< HEAD
<<<<<<< HEAD
toDoList = angular.module('toDoList',[]);

toDoList.controller('ToDoController', ['$scope','$http', function($scope, $http){
  

  $http.get('/todolist').success(function(response){
    console.log(response);
    $scope.todolist = response;
  });

  $scope.addTodo = function(){
    $http.post('/todolist', $scope.todo).success(function(response){
      console.log(response); 
      $scope.todolist.push(response); 
      $scope.todo = "";
    });
  };

  $scope.remove = function(id){
    $http.delete('/todolist/' + id).success(function(response){
      for (var i = 0; i < $scope.todolist.length; i++) {
        if(id === $scope.todolist[i]._id){
          $scope.todolist.splice(i,1);
        };
      }; 
    });
  }; 

  $scope.edit = function(id) {
    console.log(id);
    $http.get('/todolist/' + id).success(function(response) {
      $scope.todo = response;
    });
  };  

  $scope.update = function() {
    console.log($scope.todo._id);
    $http.put('/todolist/' + $scope.todo._id, $scope.todo).success(function(response) {
      for (var i = 0; i < $scope.todolist.length; i++) {
        if(response._id === $scope.todolist[i]._id){
          $scope.todolist[i] = response;
        };
      };     
    });
    $scope.todo = "";
  };


}]);

||||||| merged common ancestors
=======
toDoList = angular.module('toDoList',[]);
toDoList.controller('ToDoController', ['$scope','$http', function($scope, $http){
  

  $http.get('/todolist').success(function(response){
    console.log(response);
    $scope.todolist = response;
  });

  $scope.addTodo = function(){
    $http.post('/todolist', $scope.todo).success(function(response){
      console.log(response); 
      $scope.todolist.push(response); 
      $scope.todo = "";
    });
  };

  $scope.remove = function(id){
    $http.delete('/todolist/' + id).success(function(response){
      for (var i = 0; i < $scope.todolist.length; i++) {
        if(id === $scope.todolist[i]._id){
          $scope.todolist.splice(i,1);
        };
      }; 
    });
  }; 

  $scope.edit = function(id) {
    console.log(id);
    $http.get('/todolist/' + id).success(function(response) {
      $scope.todo = response;
    });
  };  

  $scope.update = function() {
    console.log($scope.todo._id);
    $http.put('/todolist/' + $scope.todo._id, $scope.todo).success(function(response) {
      for (var i = 0; i < $scope.todolist.length; i++) {
        if(response._id === $scope.todolist[i]._id){
          $scope.todolist[i] = response;
        };
      };     
    });
    $scope.todo = "";
  };


}]);

>>>>>>> 8eb423bc61dfca05fa55e78d24e5e7acc5843a6e
||||||| merged common ancestors
=======
toDoList = angular.module('toDoList',[]);
toDoList.controller('ToDoController', ['$scope','$http', function($scope, $http){
  

  $http.get('/todolist').success(function(response){
    console.log(response);
    $scope.todolist = response;
  });

  $scope.addTodo = function(){
    $http.post('/todolist', $scope.todo).success(function(response){
      console.log(response); 
      $scope.todolist.push(response); 
      $scope.todo = "";
    });
  };

  $scope.remove = function(id){
    $http.delete('/todolist/' + id).success(function(response){
      for (var i = 0; i < $scope.todolist.length; i++) {
        if(id === $scope.todolist[i]._id){
          $scope.todolist.splice(i,1);
        };
      }; 
    });
  }; 

  $scope.edit = function(id) {
    console.log(id);
    $http.get('/todolist/' + id).success(function(response) {
      $scope.todo = response;
    });
  };  

  $scope.update = function() {
    console.log($scope.todo._id);
    $http.put('/todolist/' + $scope.todo._id, $scope.todo).success(function(response) {
      for (var i = 0; i < $scope.todolist.length; i++) {
        if(response._id === $scope.todolist[i]._id){
          $scope.todolist[i] = response;
        };
      };     
    });
    $scope.todo = "";
  };


}]);

>>>>>>> b15e60e4e1a507ca606fae7e3e5b4f25ec620ef1
