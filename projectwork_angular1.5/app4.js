var app= angular.module('myapp', []);

app.controller('cntrl1', function($scope){
 $scope.user ="kamz";
 $scope.$on('datatoparent', function(event, args){
    $scope.user=args;
 });


 
 document.getElementById('btn').addEventListener('click',function(){
 //alert("hello");
   $scope.user ='Marlabs-UPDATED';
  // $scope.$digest();// it will manually start the 2 way binding
   // it will start the cycle

   $scope.apply();
 });
});


app.controller('cntrl2', function($scope, $rootScope){
$scope.senddata = function(){
    $rootScope.$emit('datatoparent', 'Hello From Child!!!');
};
});