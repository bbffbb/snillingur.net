"use strict";

angular.module('portfolio').controller('ProductDigController', function ($scope, $uibModalInstance, Title, product) {
  $scope.Title = Title;
  $scope.product = product;

  $scope.ok = function () {
    $uibModalInstance.close($scope.product);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
