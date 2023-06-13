app.controller("hedieuhanh-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        hedieuhanhName: "",
        description: ""
    };
    $scope.initialize = function () {
        //load category
        $http.get("/rest/hedieuhanhs").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            heDieuHanhName: "",
            description: ""
        };
        $scope.titleForm = "Thêm mới Hệ Điều Hành";
    }
    //khoi dau
    $scope.initialize();

    //tim kiem
    $scope.find = {
        heDieuHanhName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/hedieuhanhs/find/${find.heDieuHanhName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            heDieuHanhName: "",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới Hệ Điều Hành";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Hệ Điều Hành";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //them hedieuhanh moi
    $scope.create = function () {
        var heDieuHanhName = document.getElementById("heDieuHanhName").value;
        var item = angular.copy($scope.form);
        if (heDieuHanhName != "") {
            $http.post(`/rest/hedieuhanhs`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới Hệ điều hành thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới Hệ điều hành thất bại!',
                })
                console.log("Error", error);
                $scope.initialize();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới Hệ điều hành thất bại!',
            })
        }
    }
    //cap nhat hedieuhanh
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/hedieuhanhs/${item.heDieuHanhId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.heDieuHanhId == item.heDieuHanhId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật Hệ điều hành thành công!',
            })
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật Hệ điều hành thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa hedieuhanh
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa hệ điều hành này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/hedieuhanhs/${item.heDieuHanhId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.heDieuHanhId == item.heDieuHanhId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Hệ điều hành đã xóa thành công',
                        'success'
                    )
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa Hệ điều hành thất bại!',
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