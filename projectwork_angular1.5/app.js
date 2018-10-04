var app = angular.module('myapp',[]);

/*app.filter('myFilter', function(){
    
    return function(data,keyword){
    
    return (keyword) ? data.filter((item, index) => {
        
        if(item.username.toLowerCase().indexOf(keyword.toLowerCase()) != -1 || item.org.toLowerCase().indexOf(keyword.toLowerCase()) != -1
          || item.location.toLowerCase().indexOf(keyword.toLowerCase()) != -1)
        {
           return true;
        }
    })  : data;
    };
    
});*/

app.factory('dataFactory', function(){
  return {
      'username':'marlabs',
      'contact':'34134134314',
      'display':function(){
          return this.username+', '+this.contact;
      }
  };
});



// service return constructors so its better than function
function users(){
this.username='marlabs',
this.contact='34134134314',
this.display=function(){
    return this.username+', '+this.contact;
};
}

app.service("dataService",users);




app.controller('mycntrl', function($scope, $timeout, $interval,$http, dataFactory, dataService){
    
    
//    var cancel_int = $interval(function(){
        
//         console.log('interval');
//     },1000);
    
//     $timeout(function(){
//         $interval.cancel(cancel_int);
        
//     },3000);
    

$scope.factory_resp=dataFactory.display();


$scope.Service_resp=dataService.display();

    $http.get("http://192.168.1.10:8080/7Angular_assign1.5/dataapp.json").then(function(resp){
    
    $scope.user_data=resp.data;
    
    },function(err){
        
        console.log(err);
    });
    
    
    
    
    
    /*$scope.users=[
        
        
        {
           'username':'user1',
            'location':'location1',
            'org':'marlabs'
        },
        {
           'username':'user2',
            'location':'location2',
            'org':'smarlab'
        },
        {
           'username':'user3',
            'location':'location3',
            'org':'dmarla'
        },
        
        
            
        
    ];*/
    
});