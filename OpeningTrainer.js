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

    $scope.advance = function() 
        {
        var advance = 'rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3';
        $scope.board.position(advance, false);
        };
    
    $scope.exchange = function() 
        {
        var exchange = 'rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3';
        $scope.board.position(exchange, false);
        };
    
    $scope.main = function() 
        {
        var main = 'rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4';
        $scope.board.position(main, false);
        };
    
//4...Bf5 FEN: 'rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5' 
    

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
