'use strict';

myApp.controller('FirstCtrl', function ($scope, ourSvc) {

    // $scope.reallyLike = ourSvc.reallyLike;
    // $scope.kindOfLike = ourSvc.kindOfLike;
    $scope.getAllArtist = function() {
      ourSvc.getAll();
    }

    $scope.addArtist = function() {
        var user =  buildArtist();
        ourSvc.addNewArtist(user);
        removeArtist();
    };

    function buildArtist() {
        return {
            name: $scope.name,
            genre: $scope.genre,
            score: $scope.score
        }
    }

    function removeArtist(){
        $scope.name = '';
        $scope.genre = '';
        $scope.score = '';
    }
});
