describe('test', function () {

    var $rootScope;
    var $scope;
    var $controller;

    beforeEach(module('dockrics'));
    beforeEach(inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('ContainersController', {
            $scope: $scope
        })
    }));

    it("test", function () {
        expect(true).toBe(true);
    }); 
});