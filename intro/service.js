angular.module('angularService').service('ourSvc', function(){

    this.artistsILike = [];
    this.artistsIKindOfLike = [];


    this.addArtistFromService = function(obj) {
        if(obj.count < 50)this.artistsIKindOfLike.push(obj);
        else if(obj.count > 50) this.artistsILike.push(obj);
    };


});