githubUserSearch.factory('Search', ['$http', function($http){
  var queryUrl = 'https://api.github.com/search/users';
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
    },
    query2: function(user){
      return $http({
        url: 'http://api.github.com/users/' + user,
        method: 'Get',
        params: {
          'access_token': token
        }
      });
    }
  };
}]);
