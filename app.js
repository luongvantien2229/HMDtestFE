var app = angular.module('ProductApp', []);

app.controller('ProductController', function($scope, $http) {
    $scope.products = [];
    $scope.newProduct = {};

    // Lấy danh sách sản phẩm
    $scope.getProducts = function() {
        $http.get('http://localhost:8000/api/products')
            .then(function(response) {
                $scope.products = response.data;
            }, function(error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    };

    // Thêm sản phẩm và reload danh sách
    $scope.addProduct = function() {
        $http.post('http://localhost:8000/api/products', $scope.newProduct)
            .then(function(response) {
                $scope.newProduct = {}; // Reset form
                $scope.getProducts(); // Reload danh sách sản phẩm
            }, function(error) {
                console.error('Lỗi khi thêm sản phẩm:', error);
            });
    };

    // Gọi API ngay khi trang được load
    $scope.getProducts();
});
