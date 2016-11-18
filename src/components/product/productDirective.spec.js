"use strict";

describe('productDirective', () => {
  var template = '<product></product>';
  var scope;
  var compile;
  var element;
  var backend;

  beforeEach(module('portfolio'));

  beforeEach(inject(function($rootScope, $compile, $httpBackend) {
    scope = $rootScope.$new();
    compile = $compile;
    backend = $httpBackend;
    $httpBackend.expectGET("lang_is.json").respond('translate');
    $httpBackend.expectGET("src/components/product/product.html").respond('<div></div>');
    element = compile(template)(scope);
    scope.$digest();
    backend.flush();
  }));

  it('should replaces the element with the appropriate content', () =>{
    expect(element.html()).toContain("<div></div>");
  });
});
