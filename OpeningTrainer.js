var CT = angular.module('chessTrainer', ['ngRoute']);

CT.config(function($routeProvider) 
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
            .when('/nimzo', 
              {
              templateUrl : 'pages/nimzo.htm',
              controller  : 'nimzoController'
              })
        .when('/CK', 
              {
              templateUrl : 'pages/caro-kann.htm',
              controller  : 'caro-kannController'
			  });
	});

CT.controller('mainController', function($scope) 
    {
    $scope.message = 'Choose your opening to practice';
	});

CT.controller('colleController', function($scope) 
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

CT.controller('nimzoController', ['$scope', '$http', function($scope, $http) 
    {
    
//    $http.get('http://op12no2.me/toys/lozzadev/play.htm?fen=8/8/8/2r1k3/8/4K3/8/8%20w%20-%20-%200%201')
//        .success(function (data) 
//            {
//            console.log("Hooray!");
//            $scope.title = data.results.books[0].title;
//            })
//        .error(function (data, status) 
//            {
//            console.log("Oops...");
//            });
        }
	]);

CT.controller('caro-kannController', function($scope) 
    {
    var onDrop = function(source, target, piece, newPos, oldPos, orientation)   {
        if( ChessBoard.objToFen(newPos) == 'rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR' )
            alert("Correct!");
        else
            alert("Incorrect");
      };
    
    var cfg = 
        {
        showNotation: false,
        orientation: 'black',
        onDrop: onDrop,
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
