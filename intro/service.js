angular.module('angularService').service('ourSvc', function(){

    this.artistsILike = [];
    this.artistsIKindOfLike = [];


    this.addArtistFromService = function(obj) {
        this.artistsFromService.push(obj);

    };

    
});