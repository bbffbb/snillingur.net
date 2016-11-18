"use strict";

angular.module('portfolio').controller('SellersDigController',
  function($scope, $uibModalInstance, Title, seller) {
    $scope.Title = Title;
    $scope.seller = seller;


    $scope.ok = function() {
      
      $uibModalInstance.close($scope.seller);

    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.category = {
    options: [
      'Fatnaður',
      'Matvörur',
      'Skartgripir',
      'Keramik'
    ],
    selected: $scope.category
    };



  });
