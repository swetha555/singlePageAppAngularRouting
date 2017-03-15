// script.js

    // create the module and name it scotchApp
    var spaApp = angular.module('spaApp', ['ngRoute']);

    spaApp.config(function($routeProvider, $locationProvider){
    	$routeProvider
    		// route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });

             // use the HTML5 History API
        $locationProvider.html5Mode(true);

    });

    // create the controller and inject Angular's $scope
    spaApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet lectus tincidunt, convallis ex hendrerit, venenatis justo. Ut eget purus ut nulla malesuada fermentum. Sed cursus pharetra lacus, at porttitor turpis pretium nec. In ante tellus, consectetur eget commodo eu, gravida ut orci. Etiam ac magna mauris. Sed lobortis enim eu tellus iaculis posuere nec quis metus. Vestibulum congue, lacus quis rhoncus aliquet, ante nunc sodales libero, non varius turpis nisi eget turpis. Aenean sed dolor blandit, malesuada diam at, dapibus mauris. Fusce ac tempus arcu. Pellentesque varius nibh nulla. Nunc maximus diam nisi, vitae gravida velit tempus eu. Proin sem ipsum, fermentum vel vulputate lobortis, commodo et lorem. Quisque commodo dapibus volutpat. Nam a interdum magna.';
    });

    spaApp.controller('aboutController', function($scope) {
        $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet lectus tincidunt, convallis ex hendrerit, venenatis justo. Ut eget purus ut nulla malesuada fermentum. Sed cursus pharetra lacus, at porttitor turpis pretium nec. In ante tellus, consectetur eget commodo eu, gravida ut orci. Etiam ac magna mauris. Sed lobortis enim eu tellus iaculis posuere nec quis metus. Vestibulum congue, lacus quis rhoncus aliquet, ante nunc sodales libero, non varius turpis nisi eget turpis. Aenean sed dolor blandit, malesuada diam at, dapibus mauris. Fusce ac tempus arcu. Pellentesque varius nibh nulla. Nunc maximus diam nisi, vitae gravida velit tempus eu. Proin sem ipsum, fermentum vel vulputate lobortis, commodo et lorem. Quisque commodo dapibus volutpat. Nam a interdum magna.Ut sodales ac ex et lobortis. Donec et diam augue. Duis eget mauris sit amet ligula accumsan porta. Phasellus velit risus, eleifend non facilisis ac, efficitur vitae massa. Nunc consequat laoreet leo sit amet placerat. Maecenas efficitur faucibus lacinia. Sed nec sem id neque accumsan posuere eget a tellus. Quisque vel turpis blandit, posuere velit non, vulputate ligula. Etiam consequat eros id leo sagittis varius. Phasellus at viverra purus, interdum hendrerit ligula. Donec consectetur quam eu odio euismod imperdiet. Nam eu tellus et dui feugiat egestas. Ut consectetur nec odio at mollis. Sed fringilla maximus ligula a viverra.';
    });

    spaApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! This is just a demo.';
    });

