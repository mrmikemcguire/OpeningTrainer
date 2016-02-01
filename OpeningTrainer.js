var ngDemo = angular.module('ngDemo', ['ngRoute']);

ngDemo.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.htm',
              controller  : 'mainController'
			  })
        .when('/colle', 
              {
              templateUrl : 'pages/colle.htm',
              controller  : 'colleController'
			  })
            .when('/array', 
              {
              templateUrl : 'pages/nimzo.htm',
              controller  : 'nimzoController'
              })
        .when('/input', 
              {
              templateUrl : 'pages/caro-kann.htm',
              controller  : 'caro-kannController'
			  });
	});

ngDemo.controller('mainController', function($scope) 
    {
    $scope.message = 'Choose your opening to practice';
	});

ngDemo.controller('colleController', function($scope) 
    {
    $scope.positions =
        [
            {
            opening: "colle",
            questionPosition: "",
            answerPosition: "",
            move: ""
            },
            {
            opening: "colle",
            questionPosition: "",
            answerPosition: "",
            move: ""
            } 
        ];
	});

ngDemo.controller('nimzoController', function($scope)
    {
    $scope.characters =
        [
            {
            opening: "nimzo",
            questionPosition: "",
            answerPosition: "",
            move: ""
            },
            {
            name: "Aragorn",
            race: "Human Ranger",
            image: "images/small.png"
            },
            {
            name: "Gollum/Smeagol",
            race: "Hobbit",
            image: "images/medium.png"
            },
            {
            name: "Legolas",
            race: "Elf",
            image: "images/large.png"
            }
        ];
   });

ngDemo.controller('caro-kannController', function($scope) 
    {
    var cfg = 
        {
        showNotation: false,
        orientation: 'black',
        draggable: true,
        };
    $scope.board = ChessBoard('board', cfg);
    
    $scope.startMe = function() 
        {
        $scope.board.start(false)
        };

    $scope.ruyLopez = function() 
        {
        var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
        $scope.board.position(ruyLopez, false);
        };

    $scope.rookCM = function() 
        {
        var rookCheckmate = 
            {
            a4: 'bK',
            c4: 'wK',
            a7: 'wR'
            };
        $scope.board.position(rookCheckmate, false);
        };
    });


$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
