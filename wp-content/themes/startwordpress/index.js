// Create Angular Module
var myApp = angular.module("myApp", ["ngRoute"]);

// Configure routes
myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : appInfo.template_directory + 'pages/home.min.html',
		controller : 'homeController'
	})

	.when('/events/:id', {
		templateUrl : appInfo.template_directory + 'pages/event-template.min.html',
		controller : 'displayEventController'
	})

	.when('/events', {
		templateUrl : appInfo.template_directory + 'pages/events.min.html',
		controller : 'eventController'
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

// Make a factory to query a post
myApp.factory('DisplayPostFactory', ['$http', '$q', function($http, $q) {
	return {
		post: function(postSlug) {
			// Use $http and $q to get a promise from json object
			console.log('postSlug is ' + postSlug);
			var deferred = $q.defer();
			var httpPromise = $http.get(appInfo.api_url + 'posts?slug=' + postSlug, {cache: true});
			httpPromise.then(function (response) { 
				deferred.resolve(response);
			});
			return deferred.promise;
		}
	};
}]);

// Controllers

// Make a controller for the home page
myApp.controller('homeController', ['$scope', 'PostsFactory', function($scope, PostsFactory) {
	// Call the posts factory with the category of front page events
	PostsFactory.posts('front-page-events')
	.then(function(response) {
		console.log(response.data); // for testing
		$scope.events = response.data; // set the events
	});

	//$scope.events = events;
	$scope.stories = stories;
}]);



// Make a controller for all the events
myApp.controller('eventController', ['$scope', 'PostsFactory', function($scope, PostsFactory) {
	PostsFactory.posts('events')
	.then(function(response) {
		console.log(response.data); // for testing
		$scope.events = response.data; // set the events
	});
}]);

// Make a controller to display the event
myApp.controller('displayEventController', ['$scope', '$routeParams', 'DisplayPostFactory', function($scope, $routeParams, DisplayPostFactory) {
	DisplayPostFactory.post($routeParams.id)
	.then(function(response) {
		console.log('Data is')
		console.log(response.data); // for testing
		$scope.post = response.data[0];
	});
}]);

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

// Filters

// Filter to inject html directly into app
myApp.filter( 'to_trusted', ['$sce', function( $sce ){
	return function( text ) {
		return $sce.trustAsHtml( text );
	}
}]);

// Filter to check if event is in future
myApp.filter('inFuture', function() {
	return function(date) {
		console.log(date);
		eventDate = new Date(date);
		if (eventDate < Date.now()) {
			return date;
		}
	}
})