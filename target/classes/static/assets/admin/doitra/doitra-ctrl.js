app.controller("doitra-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        product:
        {anhChinh: "laptop-mau.png"}
    };
    $scope.items2 = [];
    $scope.initialize = function () {
        //load category
        $http.get("/rest/doitras").then(resp => {
            $scope.items = resp.data;
        });
        $http.get("/rest/doitras/selectYeuCauChuaXacNhan").then(resp => {
            $scope.items2 = resp.data;
        });
        $scope.form = {
            anhChinh: "laptop-mau.png",
        };
        $scope.titleForm = "Cập nhật Yêu cầu đổi trả";
    }
    //khoi dau
    $scope.initialize();

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            anhChinh: "laptop-mau.png",
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Yêu cầu đổi trả";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //cap nhat manhinh
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/doitras/${item.doiTraId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.doiTraId == item.doiTraId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật yêu cầu đổi trả thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật yêu cầu đổi trả thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa manhinh
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa yêu cầu đổi trả này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/doitras/${item.doiTraId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.doiTraId == item.doiTraId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Yêu cầu đổi trả đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa yêu cầu đổi trả thất bại!',
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

    $scope.pager1 = {
        page: 0,
        size: 5,
        get items2() {
            var start = this.page * this.size;
            return $scope.items2.slice(start, start + this.size);
        },
        get count() {
            return Math.ceil(1.0 * $scope.items2.length / this.size);
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