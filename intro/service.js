angular.module('angularService').service('ourSvc', function(){

  this.getAll = fucntion($http) {
    return $http.get('http://localhost:3000/artists')
      .then(fucntion(response){
        if(response.status === 200){
          console.log(response.data);
          return response.data;
        }

      })
  };


    this.addArtistFromService = function(obj) {
        if(obj.count < 50)this.artistsIKindOfLike.push(obj);
        else if(obj.count > 50) this.artistsILike.push(obj);
    };


});
