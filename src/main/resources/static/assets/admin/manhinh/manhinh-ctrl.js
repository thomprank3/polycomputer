app.controller("manhinh-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        manHinhName: "",
        description: ""
    };
    $scope.initialize = function () {
        //load category
        $http.get("/rest/manhinhs").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            manHinhName: "",
            description: ""
        };
        $scope.titleForm = "Thêm mới Màn Hình";
    }
    //khoi dau
    $scope.initialize();

    //tim kiem
    $scope.find = {
        manHinhName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/manhinhs/find/${find.manHinhName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }
    
    //xoa form
    $scope.reset = function () {
        $scope.form = {
            manHinhName: "",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới Màn Hình";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Màn Hình";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //them manhinh moi
    $scope.create = function () {
        var manHinhName = document.getElementById("manHinhName").value;
        var item = angular.copy($scope.form);
        if (manHinhName != "") {
            $http.post(`/rest/manhinhs`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới Màn hình thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới Màn hình thất bại!',
                })
                console.log("Error", error);
                $scope.initialize();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới Màn hình thất bại!',
            })
        }
    }
    //cap nhat manhinh
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/manhinhs/${item.manHinhId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.manHinhId == item.manHinhId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật Màn hình thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật Màn hình thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa manhinh
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa màn hình này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/manhinhs/${item.manHinhId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.manHinhId == item.manHinhId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Màn hình đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa Màn hình thất bại!',
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