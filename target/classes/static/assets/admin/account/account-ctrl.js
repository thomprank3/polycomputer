app.controller("account-ctrl", function ($scope, $http, $location) {
    $scope.items;
    $scope.form = {};
    $scope.initialize = function () {
        //load thong tin user
        $http.get("/rest/accounts/index").then(resp => {
            $scope.items = resp.data;
        });
    }
    //khoi dau
    $scope.initialize();
    // $scope.edit = function (item) {
    //     $scope.form = angular.copy(item);
    // }
    //cap nhat bp
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/accounts/${item.username}`, item).then(resp => {
            // var index = $scope.items.findIndex(b => b.banPhimId == item.banPhimId);
            // $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật tài khoản thành công!',
            })
            // $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật tài khoản thất bại!',
            })
            // $scope.initialize();
            console.log("Error", error);
        })
        // $scope.initialize();
    }
});