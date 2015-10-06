app.factory('ips', ['$http', function($http) { 
  return $http.get('http://localhost:3000/api/ips') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);