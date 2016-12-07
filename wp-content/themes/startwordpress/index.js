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

// Make a factory to query the front page posts
myApp.factory('PostsFactory', ['$http', function($http) {
	return {
		frontPageEvents: function() {
			return $http.get(appInfo.api_url + 'posts?filter[category_name]=front-page-events');
		},
		allEvents: function() {
			return $http.get(appInfo.api_url + 'posts');
		}
	};
}]);


// Make a controller for the home page
myApp.controller('homeController', ['$scope', '$http', 'PostsFactory', function($scope, $http, PostsFactory) {
	// Store the JSON of the data to be displayed as events
	// posts?filter[category_name]=front-page
	PostsFactory.frontPageEvents()
	.then(function(response) {
		console.log(response.data); // for testing
		$scope.events = response.data; // set the events
	}, // Error Handling
		function rejected (response) {
	  	alert(response.status + ': ' + response.statusText);
		}
	);

	//$scope.events = events;
	$scope.stories = stories;
}]);



// Make a controller for each event
myApp.controller('eventController', ['$scope', '$routeParams', 'PostsFactory', function($scope, $routeParams, PostsFactory) {
	PostsFactory.allEvents()
	.then(function(response) {
		console.log(response.data);
		$scope.events = response.data;
	},
		function rejected (response) {
	  	alert(response.status + ': ' + response.statusText);
		}
	);
}]);

// Data to be stored
// Events
/*
var events = [
	{
		name: 'Homecoming',
		date: '11/28/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming2',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_1_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{	
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article" 
	},
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article" 
	},
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article" 
	},
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article" 
	},
	{
		name: 'Homecoming',
		date: '11/16/2016',
		time: '5:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	},
	{
		name: 'Homecoming',
		date: '11/18/2016',
		time: '7:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_first_article"
	},
	{
		name: 'Homecoming',
		date: '11/15/2016',
		time: '4:00 PM',
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod elit sit amet condimentum mollis. Mauris commodo malesuada urna, pellentesque eleifend",
		image: "https://placehold.it/250x200",
		id: "my_second_article"
	}
];
*/


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