describe('test', function() {

    var $rootScope;
    var $scope;
    var $controller;

    beforeEach(module('dockrics'));
    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('DashboardController', {
            $scope : $scope
        })
    }));

    it('test1', function () {
        expect($scope.welcome).not.toBeNull();
        expect($scope.welcome).toBe("Hello !");
    })
});