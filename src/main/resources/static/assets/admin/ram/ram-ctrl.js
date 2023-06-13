app.controller("ram-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        ramName: "",
        description: ""
    };
    $scope.initialize = function () {
        //load category
        $http.get("/rest/rams").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            ramName: "",
            description: ""
        };
        $scope.titleForm = "Thêm mới Ram";
    }
    //khoi dau
    $scope.initialize();

    //tim kiem
    $scope.find = {
        ramName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/rams/find/${find.ramName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            ramName: "",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới RAM";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật RAM";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //them bp moi
    $scope.create = function () {
        var ramName = document.getElementById("ramName").value;
        var item = angular.copy($scope.form);
        if (ramName != "") {
            $http.post(`/rest/rams`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới RAM thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới RAM thất bại!',
                })
                console.log("Error", error);
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới RAM thất bại!',
            })
        }
    }
    //cap nhat bp
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/rams/${item.ramId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.ramId == item.ramId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật RAM thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật RAM thất bại!',
            })
            console.log("Error", error);
        })
        $scope.initialize();
    }
    //xoa bp
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa RAM này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/rams/${item.ramId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.ramId == item.ramId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'RAM đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa RAM thất bại!',
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