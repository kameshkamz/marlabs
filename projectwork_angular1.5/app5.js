var app= angular.module('myapp', []);

app.config(function(dataserviceProvider){
    dataserviceProvider.setPrefix('Mr ');
   
});


app.provider('dataservice', function() {
  this.$get=function() {

      var prefix=' ';


      if(includePrefix){
          prefix = includePrefix;
      }


      return {
          'firstname':'Kamesh',
          'lastname':'Gopinath',
          'getData':function() {
              return prefix+''+this.firstname+ ' ' +this.lastname;
          }
      }


  };
  var includePrefix = false;
  this.setPrefix = function(value){
      includePrefix = value;
  }
});

app.directive('testDirective',function(){

    return {

        template: `
        <div>
        <input type='text' placeholder='Username' ng-model='uname' /> <br /><br />
        <input type='text' placeholder='Password' ng-model='pwd' /> <br /><br />
        <input type='button' value='Login' /> <br /> 
        </div>
        <p> Child to be displayed </p>
        <child></child>
        <div id='cntr'></div>
        <button id='btn'> Click to Update </button>
        `,
        restrict:'EAC',
        scope:{
            uname:'@',
            pwd:'=',
            fn:'&'
        },
        link: function(scope, elem, attrib){
            scope.org='google';
            document.getElementById('btn').addEventListener('click', function(){
                document.getElementById('cntr').innerHTML='<h1> Hello </h1>';
            });
        }
    };

});

app.directive('child',function(){

    return{
        template:`
        <p>Organisation: {{org}}</p>

        `,
        link: function(scope, elem, attrib){
          
        }
        
    }
});


app.controller('cntrl1', function($scope, dataservice){
   // console.log(dataservice.getData());
   $scope.userdata= dataservice.getData();
   $scope.username='Google';
   $scope.password='home';
   $scope.samplefn= function(){
       alert('Hi');
   }
   
});

// app.controller('cntrl2', function($scope, dataservice){
//    // console.log(dataservice.getData());
//     $scope.userdata= dataservice.getData();
// });