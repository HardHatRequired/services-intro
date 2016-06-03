
myApp.service('ourSvc', function() {

    this.reallyLike = [];
    this.kindOfLike = [];

    this.addNewArtist = function (artistObj) {
        console.log(artistObj);
        if(artistObj.score >= 50 ) {
            this.reallyLike.push(artistObj);

        } else if (artistObj.score < 50 ) {
            this.kindOfLike.push(artistObj);

        }
        
    };

});