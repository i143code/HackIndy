angular.module('finalIndyHackthApp')
  .controller('RegisterCtrl', function ($scope,$http) {
    $scope.submit = function(){
    	var url ='/';
    	var user={};
    	console.log('data entered');
    	$http.post(url,user)
    	.success(function(res){
                 console.log('Good')

    	})
    	.error(function(err){
            console.log('Bad')
    	})
    }
  });
