// Create Angular Module
var myApp = angular.module("myApp", ["ngRoute"]);

// Configure routes
myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : appInfo.template_directory + 'pages/home.min.html',
		controller : 'homeController'
	})

	.when('/events', {
		templateUrl : appInfo.template_directory + 'pages/events.min.html',
		controller : 'eventController'
	})

	.when('/events/:id', {
		templateUrl : appInfo.template_directory + 'pages/event-template.min.html',
		controller : 'displayEventController'
	})

	.when('/contact', {
		templateUrl : appInfo.template_directory + 'pages/contact.min.html'
	})

	.when('/join', {
		templateUrl : appInfo.template_directory + 'pages/join.min.html'
	})

	.when('/why', {
		templateUrl : appInfo.template_directory  + 'pages/why.min.html'
	})

	.when('/faq', {
		templateUrl : appInfo.template_directory + 'pages/faq.min.html'
	})

	.when('/donate', {
		templateUrl : appInfo.template_directory  + 'pages/donate.min.html'
	})
	
}]);

// Factories

// Make a factory to query the front page posts
myApp.factory('PostsFactory', ['$http', '$q', function($http, $q) {
	return {
		posts: function(categoryName) {
			// Use $http and $q to get a promise from json object
			var deferred = $q.defer();
			var httpPromise = $http.get(appInfo.api_url + 'posts?filter[category_name]=' + categoryName, {cache: true});
			httpPromise.then(function (response) { 
				deferred.resolve(response);
			});
			return deferred.promise;
		}
	};
}]);

// Make a factory to query the front page posts


// Controllers

// Make a controller for the home page
myApp.controller('homeController', ['$scope', '$http', 'PostsFactory', function($scope, $http, PostsFactory) {
	// Call the posts factory with the category of front page events
	PostsFactory.posts('front-page-events')
	.then(function(response) {
		console.log(response.data); // for testing
		$scope.events = response.data; // set the events
	});

	//$scope.events = events;
	$scope.stories = stories;
}]);



// Make a controller for each event
myApp.controller('eventController', ['$scope', '$routeParams', 'PostsFactory', function($scope, $routeParams, PostsFactory) {
	PostsFactory.posts('events')
	.then(function(response) {
		console.log(response.data); // for testing
		$scope.events = response.data; // set the events
	});
}]);

// Make a controller to display the page


// Alumni Stories
var stories = [
	{
		name: 'Lorem ipsum',
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"
	},
	{
		name: 'Lorem ipsum', 
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"

	}, 
	{
		name: "Lorem ipsum",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend"

	}
];

// Filter to inject html directly into app
myApp.filter( 'to_trusted', ['$sce', function( $sce ){
	return function( text ) {
		return $sce.trustAsHtml( text );
	}
}])