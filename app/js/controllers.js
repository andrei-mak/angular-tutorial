var incidentsControllers = angular.module('incidentsControllers', []);

incidentsControllers.controller('IncidentListCtrl', ['$scope', '$http', 
	function IncidentsListCtrl($scope,$http) {
		$http.get('incidents/incidents.json').success(function(data) {
			$scope.incidents = data.slice(0, 7);
		});

	$scope.orderProp = '-age';
}]);

incidentsControllers.controller('IncidentDetailCtrl', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		$http.get('incidents/incidents.json').success(function(data) {
			/*$scope.incidents = data.slice(0, 5);*/
			
			angular.forEach(data, function(item) {
				/*console.log(item.id);*/
				if (item.id == $routeParams.incidentId) {
					$scope.incident = item;
					/*console.log("EQUAL");*/
					/*console.log(item);*/
					}
			});
			
			/*$scope.incidents = function(data) {
				return data.id === $routeParams.incidentId;
			};*/
	
		});
		
	$scope.incidentId = $routeParams.incidentId;
}]);