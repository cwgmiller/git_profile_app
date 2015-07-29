githubUserSearch.controller('GitUserSearchController', ['Search', function(Search){
  var self = this;

  self.doSearch = function() {
    if (self.searchTerm) {
      self.searchResult = [];
      Search.query(self.searchTerm)
        .then(function(response) {
          response.data.items.forEach(function(user){
            Search.query2(user.login)
              .then(function(details){
                self.searchResult.push(details.data);
              });
          });
        });
    };
  };
}]);
