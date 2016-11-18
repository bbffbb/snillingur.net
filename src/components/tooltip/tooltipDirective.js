"use strict";

angular.module("portfolio").directive('tooltip',
() => {
  return {
    restrict: 'A',
    link: function($scope, element, attrs) {
      if (attrs.tooltip < 1) {
       $(element).hover(
        () => {// on mouseenter
          $(element).tooltip('show');
        },
        () => {// on mouseleave
          $(element).tooltip('hide');
        });
      }
    }
  };
});
