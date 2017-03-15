Single Page Application with AngularJS and Routing ngRoute.

Clean URLs: By default, Angular will throw a hash (#) into the URL. To get rid of this, we will need to use $locationProvider in the config, and enable the HTML History API. This will remove the hash and make pretty URLs.

Start a localserver in the directory and run the application 
I use python server to start a simple server using python, as mac has python already installed.
python -m SimpleHTTPServer 8080
and http://localhost:8080 to view your app on desired browser.