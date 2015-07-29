githubUserSearch.factory('Search', ['$http', function($http){
  var queryUrl = 'https://api.github.com/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'Get',
        params: {
          'q': searchTerm,
          'access_token': token
        }
      });
    }
   }
}]);
