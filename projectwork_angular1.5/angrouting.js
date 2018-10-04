var app = angular.module('myapp',['ngRoute']);


app.config(function($routeProvider){
      
    $routeProvider.when('/', {
        template:`
                <h1> Welcome all!!!! </h1>
               <p>My Angular website </p>
        `
    
    })

    .when('/Profile', {

        templateUrl:'http://192.168.1.10:8080/7Angular_assign1.5/dataapp.json'

    })
    


    
    .when('/Login', {

        template:
        ` <h1>Login Page</h1>
          <div>
            <input type="text" ng-model="authform.name" placeholder="username" /> <br /> <br />
            <input type="text" ng-model ="authform.password" placeholder="Password" /> <br /> <br />
            <input type="button" ng-click="login()" value="Login" />
          </div>
        `,
        controller:'logincontroller'

    })




    .when('/Users', {
                templateUrl: '/7Angular_assign1.5/Users.html',
                controller:'UsersController',
                resolve: ['authservice',function(authservice){
                    return authservice.checkUserstatus();
                
                }]
    });



});


app.controller('UsersController', function($scope, $location , authservice){

   // authservice.checkUserstatus();  // calling factory..
    $scope.pageTitle ='User List';

    $scope.gotohome=function(){
        $location.path('/');

    };

    $scope.Users=[
    {
        "user":"user1",
        "loca":"loca1"
    },
    {
        "user":"user2",
        "loca":"loca2"
    },
    {
        "user":"user3",
        "loca":"loca3"
    }
]
});

app.factory('authservice',function($location, $http, $q){
return{

    
    'checkUserstatus': function(){
        var defer = $q.defer();
        $http.get('http://192.168.1.10:8080/7Angular_assign1.5/check_stautus.json')
        .then(function(resp){
            if(resp.data.isLoggedIn){
                defer.resolve();
            }
            else{
                $location.path('/Login');
                defer.reject();
            
            }
        });
        return defer.promise;
    }
};

});

app.controller('logincontroller', function($scope){
    
$scope.login = function() {

 if( $scope.authform.name == '' || $scope.authform.password == '' )
   {
       alert('Please Enter Valid Login Details');
       return false;
    
   }
   localStorage.isLoggedIn = true;

};
});