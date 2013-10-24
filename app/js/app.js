var incidentsApp = angular.module('incidentsApp', [
	'ngRoute',
	'incidentsControllers'
]);

incidentsApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/incidents', {
				templateUrl: 'partials/incident-list.html',
				controller: 'IncidentListCtrl'
			}).
			when('/incidents/:incidentId', {
				templateUrl: 'partials/incident-details.html',
				controller: 'IncidentDetailCtrl'
			}).
			otherwise({
				redirectTo: '/incidents'
			});
	}]);