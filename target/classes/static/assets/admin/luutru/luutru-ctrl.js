app.controller("luutru-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        luuTruName: "",
        description: ""
    };
    $scope.initialize = function () {
        //load category
        $http.get("/rest/luutrus").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            luuTruName: "",
            description: ""
        };
        $scope.titleForm = "Thêm mới Lưu Trữ";
    }
    //khoi dau
    $scope.initialize();

    //tim kiem
    $scope.find = {
        luuTruName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/luutrus/find/${find.luuTruName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            luuTruName: "",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới Lưu Trữ";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Lưu Trữ";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //them luutru moi
    $scope.create = function () {
        var luuTruName = document.getElementById("luuTruName").value;
        var item = angular.copy($scope.form);
        if (luuTruName != "") {
            $http.post(`/rest/luutrus`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới Lưu trữ thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới Lưu trữ thất bại!',
                })
                console.log("Error", error);
                $scope.initialize();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới Lưu trữ thất bại!',
            })
        }
    }
    //cap nhat luutru
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/luutrus/${item.luuTruId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.luuTruId == item.luuTruId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật Lưu trữ thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật Lưu trữ thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa luutru
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa lưu trữ này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/luutrus/${item.luuTruId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.luuTruId == item.luuTruId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Lưu trữ đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa Lưu trữ thất bại!',
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