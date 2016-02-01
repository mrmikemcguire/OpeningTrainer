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
//    $scope.message = 'Hello World!';
//    var cfg = 
//        {
//        showNotation: false,
//        orientation: 'black',
//        draggable: true,
//        position: 'rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq d6 0 4'
//        };
//    $scope.board = ChessBoard('board', cfg);
    
    $scope.board = ChessBoard('board');

    $scope.startMe = function() 
        {
        $scope.board.start(false)
//        $scope.board.showNotation: false
//        $scope.board.orientation: 'black',
//        $scope.board.draggable: true
        }

    $('#setRuyLopezBtn').on('click', function() 
        {
        var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R';
        board.position(ruyLopez, false);
        });

    $('#setRookCheckmateBtn').on('click', function() 
        {
        var rookCheckmate = 
            {
            a4: 'bK',
            c4: 'wK',
            a7: 'wR'
            };
        board.position(rookCheckmate, false);
        });
    });


$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
