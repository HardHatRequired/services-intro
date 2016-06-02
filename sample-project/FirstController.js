'use strict';

myApp.controller('FirstCtrl', function ($scope, ourSvc) {

    $scope.reallyLike = [];
    $scope.kindOfLike = [];


    //$scope.addUser = function() {
    //    var user =  buildArtist();
    //    ourSvc.addNewArtist(user);
    //    removeArtist();
    //};


    $scope.addArtist = function(){
        if($scope.score >= 50 ) {
            $scope.reallyLike.push(buildArtist());
            clearInputField()

        } else if ($scope.score < 50 ) {
            $scope.kindOfLike.push(buildArtist());
            clearInputField()
        }

    }


    function buildArtist() {
        return {
            name: $scope.name,
            genre: $scope.genre,
            score: $scope.score
        }
    }

    function clearInputField(){
        $scope.name = '';
        $scope.genre = '';
        $scope.score = '';
    }








});















//
//$scope.reallyLike = ourSvc.reallyLike;
//$scope.kindOfLike = ourSvc.kindOfLike;
//
//$scope.addUser = function() {
//    var user =  buildArtist();
//    ourSvc.addNewArtist(user);
//    removeArtist();
//};
//
//function buildArtist() {
//    return {
//        name: $scope.name,
//        genre: $scope.genre,
//        score: $scope.score
//    }
//}
//
//function removeArtist(){
//    $scope.name = '';
//    $scope.genre = '';
//    $scope.score = '';
//}