app.controller("gift-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        giftName: "",
        giftImage: "no-image.jpg",
        description: ""
    };
    $scope.initialize = function () {
        //load category
        $http.get("/rest/gifts").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            giftName: "",
            giftImage: "no-image.jpg",
            description: ""
        };
        $scope.titleForm = "Thêm mới Quà Tặng";
    }
    //khoi dau
    $scope.initialize();

    //tim kiem
    $scope.find = {
        giftName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/gifts/find/${find.giftName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            giftName: "",
            giftImage: "no-image.jpg",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới Quà Tặng";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Quà Tặng";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //them gift moi
    $scope.create = function () {
        var giftName = document.getElementById("giftName").value;
        var item = angular.copy($scope.form);
        if (giftName != "") {
            $http.post(`/rest/gifts`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới Quà tặng thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới Quà tặng thất bại!',
                })
                console.log("Error", error);
                $scope.initialize();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới Quà tặng thất bại!',
            })
        }
    }
    //cap nhat gift
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/gifts/${item.giftId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.giftId == item.giftId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật Quà tặng thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật Quà tặng thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa gift
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa quà tặng này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/gifts/${item.giftId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.giftId == item.giftId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Quà tặng đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa Quà tặng thất bại!',
                    })
                    console.log("Error", error);
                    $scope.initialize();
                })

            }
        })
        $scope.initialize();
    }
    $scope.imageChanged = function (files) {
        var data = new FormData();
        data.append('file', files[0]);
        $http.post('/rest/upload/images', data, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(resp => {
            $scope.form.giftImage = resp.data.name;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Lỗi upload hình ảnh!',
            })
            console.log("Error", error);
        })
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