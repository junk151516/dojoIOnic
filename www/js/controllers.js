
     
angular.module('reader.controllers', ['ionic', 'ngCordova'])
    .controller('readerController', function($scope, $cordovaBarcodeScanner){

        $scope.readCode = function(){
            alert('Me presionaron');
            $cordovaBarcodeScanner.scan().then(function(img){
                alert(img.text);
            },function(err){
                alert('Error' + err);
            });
        }

    });    
   