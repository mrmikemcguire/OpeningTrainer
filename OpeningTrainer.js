var ngDemo = angular.module('ngDemo', ['ngRoute']);

ngDemo.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
			  })
        .when('/cost', 
              {
              templateUrl : 'pages/cost.html',
              controller  : 'costController'
			  })
            .when('/array', 
              {
              templateUrl : 'pages/array.html',
              controller  : 'arrayController'
              })
        .when('/input', 
              {
              templateUrl : 'pages/input.html',
              controller  : 'inputController'
			  });
	});

ngDemo.controller('mainController', function($scope) 
    {
    $scope.message = 'See what cool things Angular can do!';
	});

ngDemo.controller('costController', function($scope) 
    {
    $scope.quantity = 1;
    $scope.price = 9.99;
	});

ngDemo.controller('arrayController', function($scope)
    {
    $scope.characters =
        [
            {
            name: "Aragorn",
            race: "Human Ranger",
            image: "images/aragorn200.png"
            },
            {
            name: "Gollum/Smeagol",
            race: "Hobbit",
            image: "images/gollum200.png"
            },
            {
            name: "Legolas",
            race: "Elf",
            image: "images/legolas200.png"
            }
        ];
   });

ngDemo.controller('inputController', function($scope) 
    {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function() 
        {
        return $scope.firstName + " " + $scope.lastName;
        }
	});

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
