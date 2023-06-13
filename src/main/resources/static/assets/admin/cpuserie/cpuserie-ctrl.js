app.controller("cpuserie-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        cpuSerieName: "",
        description: ""
    };
    $scope.initialize = function () {
        //load category
        $http.get("/rest/cpuseries").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            cpuSerieName: "",
            description: ""
        };
        $scope.titleForm = "Thêm mới Thế hệ CPU";
    }
    //khoi dau
    $scope.initialize();

    //tim kiem
    $scope.find = {
        cpuSerieName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/cpuseries/find/${find.cpuSerieName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            cpuSerieName: "",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới Thế hệ CPU";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Thế hệ CPU";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //them cpuserie moi
    $scope.create = function () {
        var cpuSerieName = document.getElementById("cpuSerieName").value;
        var item = angular.copy($scope.form);
        if (cpuSerieName != "") {
            $http.post(`/rest/cpuseries`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới Thế hệ CPU thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới Thế hệ CPU thất bại!',
                })
                console.log("Error", error);
                $scope.initialize();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới Thế hệ CPU thất bại!',
            })
        }
    }
    //cap nhat cpuserie
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/cpuseries/${item.cpuSerieId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.cpuSerieId == item.cpuSerieId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật Thế hệ CPU thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật Thế hệ CPU thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa cpuserie
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa thế hệ CPU này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/cpuseries/${item.cpuSerieId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.cpuSerieId == item.cpuSerieId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Thế hệ CPU đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa Thế hệ CPU thất bại!',
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