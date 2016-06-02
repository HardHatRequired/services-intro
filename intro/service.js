angular.module('angularService').service('ourSvc', function(){

    this.reallyLike = [];

    this.addNewArtist = function(artistObj){
       this.reallyLike.push(
           {
               name: artistObj.name,
               genre: artistObj.genre,
               rating: artistObj.rating
           });
    };

});