app.controller("banphim-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        banPhimName: "",
        description: ""
    };
    $scope.initialize = function () {
        //load category
        $http.get("/rest/banphims").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            banPhimName: "",
            description: ""
        };
        $scope.titleForm = "Thêm mới Bàn Phím";
    }
    //khoi dau
    $scope.initialize();

    //tim kiem
    $scope.find = {
        banPhimName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/banphims/find/${find.banPhimName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            banPhimName: "",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới Bàn phím";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Bàn phím";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //them bp moi
    $scope.create = function () {
        var banPhimName = document.getElementById("banPhimName").value;
        var item = angular.copy($scope.form);
        if (banPhimName != "") {
            $http.post(`/rest/banphims`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới bàn phím thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới bàn phím thất bại!',
                })
                $scope.initialize();
                console.log("Error", error);
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới bàn phím thất bại!',
            })
        }
    }
    //cap nhat bp
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/banphims/${item.banPhimId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.banPhimId == item.banPhimId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật bàn phím thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật bàn phím thất bại!',
            })
            $scope.initialize();
            console.log("Error", error);
        })
        $scope.initialize();
    }
    //xoa bp
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa bàn phím này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/banphims/${item.banPhimId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.banPhimId == item.banPhimId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Bàn phím đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa bàn phím thất bại!',
                    })
                    console.log("Error", error);
                    $scope.initialize();
                })

            }
        })
        $scope.initialize();
    }

    // phan trang
    $scope.pager = {
        page: 0,
        size: 5,
        get items() {
            var start = this.page * this.size;
            return $scope.items.slice(start, start + this.size);
        },
        get count() {
            return Math.ceil(1.0 * $scope.items.length / this.size);
        },
        first() {
            this.page = 0;
        },
        prev() {
            this.page--;
            if (this.page < 0) {
                this.last();
            }
        },
        next() {
            this.page++;
            if (this.page >= this.count) {
                this.first();
            }
        },
        last() {
            this.page = this.count - 1;
        }
    }
});