'use strict';

angular.module('angularService')
    .controller('FirstCtrl', function ($scope, ourSvc) {

     $scope.reallyLike = ourSvc.reallyLike;

        $scope.addArtist = function() {
            var artist =  buildArtist();
            ourSvc.addNewArtist(artist);
            clearInputField()
        };



        function buildArtist(){
            return{
                name: $scope.artist,
                genre: $scope.genre,
                rating: $scope.rating
            }
        }

        function clearInputField() {
             $scope.artist = "";
             $scope.genre = "";
             $scope.rating = "";

        }









// index.html, app.js, mainCtrl and mainSrv


   // We can tap into the digest cycle by using the $watch because under
   // the hood angular is always watching for changes
   // We would use watch when we want to watch a specific
   // This is an example of a shallow watch



   //$scope.$watch('inputData', function() {
   //   var newItem = $scope.inputData;
   //   if(newItem && newItem[newItem.length -1] == ',') {
   //      var withOutComma = newItem.substring(0, newItem.length -1);
   //      $scope.items.push(withOutComma);
   //      $scope.inputData = '';
   //   }
   //});



// This is an example of a deep watch so it will look at the entire object and for any changes in sub properties
//   $scope.$watch('inputData', function() {
//   var newItem = $scope.inputData;
//   if(newItem && newItem[newItem.length -1] == ',') {
//      var withoutComma = newItem.substring(0, newItem.length - 1);
//      $scope.items.push(withoutComma);
//      $scope.inputData = '';
//
//   }
//}, true);

   //.3 #watchCollection is also a shallow

});


