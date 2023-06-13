app.controller("category-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        categoryName: "",
        categoryImage: "laptop-mau.png",
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
        $http.get("/rest/categories").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            categoryName: "",
            categoryImage: "laptop-mau.png",
            description: ""
        };
        $scope.titleForm = "Thêm mới Danh mục";
    }
    //khoi dau
    $scope.initialize();

    //tim kiem
    $scope.find = {
        categoryName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/categories/find/${find.categoryName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }
    //xoa form
    $scope.reset = function () {
        $scope.form = {
            categoryName: "",
            categoryImage: "laptop-mau.png",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới Danh mục";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Danh mục";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    //them sp moi
    $scope.create = function () {
        var categoryName = document.getElementById("categoryName").value;
        var item = angular.copy($scope.form);
        if (categoryName != "") {
            $http.post(`/rest/categories`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới danh mục thành công!',
                })
                $(".nav-tabs a:eq(1)").tab('show')
                $scope.initialize();
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Thêm mới danh mục thất bại!',
                })
                console.log("Error", error);
                $scope.initialize();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới danh mục thất bại!',
            })
        }
    }
    //cap nhat sp
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/categories/${item.categoryId}`, item).then(resp => {
            var index = $scope.items.findIndex(c => c.categoryId == item.categoryId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật danh mục thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật danh mục thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
    }

    //xoa sp
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa danh mục này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/categories/${item.categoryId}`).then(resp => {
                    var index = $scope.items.findIndex(c => c.categoryId == item.categoryId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Danh mục đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa danh mục thất bại!',
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
            $scope.form.categoryImage = resp.data.name;
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