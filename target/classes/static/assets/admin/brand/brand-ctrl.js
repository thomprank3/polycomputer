app.controller("brand-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        brandName: "",
        brandImage: "no-image.jpg",
        description: ""
    };
    // $scope.sizePage = 1;
    // $scope.optionSize= [
    //     {name: '5', size: 5},
    //     {name: '10', size: 10},
    //     {name: '20', size: 20},
    //     {name: '25', size: 25}
    // ];

    $scope.initialize = function () {
        //load category
        $http.get("/rest/brands").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            brandName: "",
            brandImage: "no-image.jpg",
            description: ""
        };
        $scope.titleForm = "Thêm Mới Thương Hiệu";
    }
    //khoi dau
    $scope.initialize();

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            brandName: "",
            brandImage: "no-image.jpg",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm Mới Thương Hiệu";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập Nhật Thương Hiệu";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }
    
    $scope.find = {
        brandName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/brands/find/${find.brandName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }

    //them sp moi
    $scope.create = function () {
        var brandName = document.getElementById("brandName").value;
        var item = angular.copy($scope.form);
        if (brandName != "") {
            $http.post(`/rest/brands`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới thương hiệu thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới thương hiệu thất bại!',
                })
                console.log("Error", error);
                $scope.initialize();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới thương hiệu thất bại!',
            })
        }
    }
    //cap nhat sp
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/brands/${item.brandId}`, item).then(resp => {
            var index = $scope.items.findIndex(c => c.brandId == item.brandId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật thương hiệu thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật thương hiệu thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa sp
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa thương hiệu này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/brands/${item.brandId}`).then(resp => {
                    var index = $scope.items.findIndex(c => c.brandId == item.brandId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Thương hiệu đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa thương hiệu thất bại!',
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
            $scope.form.brandImage = resp.data.name;
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