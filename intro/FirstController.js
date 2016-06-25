'use strict';

angular.module('angularService')
    .controller('FirstCtrl', function ($scope,ourSvc) {

    // This is from the service to the view
    $scope.getAllArtist = function() {
      ourSvc.getAll();
    };


     /// This is to the service
     $scope.addArtist = function(){
         ourSvc.addArtistFromService(createArtistObj());
         clearForm();

     };

        function createArtistObj(){
            return {
                name: $scope.artist,
                genre: $scope.genre,
                count: $scope.count
            }
        }


        function clearForm() {
            $scope.artist = '';
            $scope.genre = '';
            $scope.count = '';
        }


        // Add a time property so you can sort the list by most recent
        // Add a delete button to each card
        // Add archive button to each card


        //$scope.items = [];
        //
        //$scope.$watch('inputData', function() {
        //   var newItem = $scope.inputData;
        //   if(newItem && newItem[newItem.length -1] == ',') {
        //      var withOutComma = newItem.substring(0, newItem.length -1);
        //      $scope.items.push(withOutComma);
        //      $scope.inputData = '';
        //   }
        //});




   // We can tap into the digest cycle by using the $watch because under
   // the hood angular is always watching for changes
   // We would use watch when we want to watch a specific
   // This is an example of a shallow watch







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
