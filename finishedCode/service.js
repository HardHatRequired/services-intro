
myApp.service('ourSvc', function() {

    this.getAll = fucntion($http) {
      return $http.get('http://localhost:3000/artists')
        .then(fucntion(response){
          if(response.status === 200){
            console.log(response.data);
            return response.data;
          }

        })
    };

    this.addNewArtist = function (artistObj) {
        console.log(artistObj);
        if(artistObj.score >= 50 ) {
            this.reallyLike.push(artistObj);

        } else if (artistObj.score < 50 ) {
            this.kindOfLike.push(artistObj);

        }

    };

});
