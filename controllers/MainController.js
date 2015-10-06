app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.ip =  "";
	$scope.ips =  "";

	$scope.sendIp = function() {
		$http({
		    method: 'POST',
		    url: 'http://localhost:3000/api/ip',
		    headers: {	'Content-Type': 'application/x-www-form-urlencoded'	},
		     transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    	data: {ip: $scope.ip}
			}).success(function (data) {
				$scope.ips = data;
				console.log(data);
				$scope.ip = "";
			});
	};

 }]);
/*
	ips.success(function(data) {
		$scope.ips = data;
	});
	*/