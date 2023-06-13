app.controller("product-ctrl", function ($scope, $http, $location) {
    $scope.items = [];
    $scope.form = {
        productName: "",
        anhChinh: "laptop-mau.png",
        description: "",
        giamGia: 0,
        gia: 0,
        soLuong: 0,
        anhPhu1: "no-image.jpg",
        anhPhu2: "no-image.jpg",
        anhPhu3: "no-image.jpg",
        anhPhu3: "no-image.jpg",
        anhPhu4: "no-image.jpg"
    };
    $scope.cates = [];
    $scope.pins = [];
    $scope.brands = [];
    $scope.hedieuhanhs = [];
    $scope.manhinhs = [];
    $scope.phukiendikems = [];
    $scope.rams = [];
    $scope.socongluutrutoidas = [];
    $scope.colors = [];
    $scope.luutrus = [];
    $scope.cpus = [];
    $scope.cpuseries = [];
    $scope.chipdohoas = [];
    $scope.congxuathinhs = [];
    $scope.congketnois = [];
    $scope.gifts = [];
    $scope.banphims = [];
    $scope.productGiamGia = [];

    $scope.initialize = function () {
        //load category
        $http.get("/rest/products").then(resp => {
            $scope.items = resp.data;
        });
        $scope.form = {
            productName: "",
            anhChinh: "laptop-mau.png",
            description: "",
            giamGia: 0,
            gia: 0,
            soLuong: 0,
            anhPhu1: "no-image.jpg",
            anhPhu2: "no-image.jpg",
            anhPhu3: "no-image.jpg",
            anhPhu3: "no-image.jpg",
            anhPhu4: "no-image.jpg"
        };
        $http.get("/rest/categories").then(resp => {
            $scope.cates = resp.data;
        });

        $http.get("/rest/pins").then(resp => {
            $scope.pins = resp.data;
        });
        $http.get("/rest/brands").then(resp => {
            $scope.brands = resp.data;
        });
        $http.get("/rest/hedieuhanhs").then(resp => {
            $scope.hedieuhanhs = resp.data;
        });
        $http.get("/rest/phukiendikems").then(resp => {
            $scope.phukiendikems = resp.data;
        });
        $http.get("/rest/manhinhs").then(resp => {
            $scope.manhinhs = resp.data;
        });
        $http.get("/rest/rams").then(resp => {
            $scope.rams = resp.data;
        });
        $http.get("/rest/socongluutrutoidas").then(resp => {
            $scope.socongluutrutoidas = resp.data;
        });
        $http.get("/rest/colors").then(resp => {
            $scope.colors = resp.data;
        });
        $http.get("/rest/luutrus").then(resp => {
            $scope.luutrus = resp.data;
        });
        $http.get("/rest/cpus").then(resp => {
            $scope.cpus = resp.data;
        });
        $http.get("/rest/cpuseries").then(resp => {
            $scope.cpuseries = resp.data;
        });
        $http.get("/rest/chipdohoas").then(resp => {
            $scope.chipdohoas = resp.data;
        });
        $http.get("/rest/congxuathinhs").then(resp => {
            $scope.congxuathinhs = resp.data;
        });
        $http.get("/rest/congketnois").then(resp => {
            $scope.congketnois = resp.data;
        });
        $http.get("/rest/gifts").then(resp => {
            $scope.gifts = resp.data;
        });
        $http.get("/rest/banphims").then(resp => {
            $scope.banphims = resp.data;
        });
        $http.get("/rest/products/findProductDangGiamGia").then(resp => {
            $scope.productGiamGia = resp.data;
        });
        $scope.titleForm = "Thêm mới Sản Phẩm";
    }
    //khoi dau
    $scope.initialize();

    // app.directive('motTram', function () {
    //     return {
    //         require: 'ngModel',
    //         link: function(scope, element, attr, mCtrl){
    //             function fnValidate(value){
    //                 if(value>100){
    //                     mCtrl.$setValidity('charE', true);
    //                 }
    //                 if(value<0){
    //                     mCtrl.$setValidity('charE', true);
    //                 }
    //                 return value;
    //             }
    //             mCtrl.push(fnValidate);
    //         }
    //     };
    // });

    //tim kiem
    $scope.find = {
        productName: "",
        finAndFills() {
            var find = angular.copy(this);
            $http.get(`/rest/products/find/${find.productName}`).then(resp => {
                $scope.items = resp.data;
            });
        },
    }

    //xoa form
    $scope.reset = function () {
        $scope.form = {
            productName: "",
            anhChinh: "laptop-mau.png",
            description: ""
        };
    }
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    $scope.goToAdd = function () {
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm = "Thêm mới Sản Phẩm";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Sản Phẩm";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }
    
    //them sp moi
    $scope.create = function () {
        var productName = document.getElementById("productName").value;
        var brand = document.getElementById("brand").value;
        var category = document.getElementById("category").value;
        var pin = document.getElementById("pin").value;
        var ram = document.getElementById("ram").value;
        var luuTru = document.getElementById("luuTru").value;
        var cpu = document.getElementById("cpu").value;
        var cpuSerie = document.getElementById("cpuSerie").value;
        var chipDoHoa = document.getElementById("chipDoHoa").value;
        var color = document.getElementById("color").value;
        var heDieuHanh = document.getElementById("heDieuHanh").value;
        var congXuatHinh = document.getElementById("congXuatHinh").value;
        var soCongLuuTruToiDa = document.getElementById("soCongLuuTruToiDa").value;
        var baoHanh = document.getElementById("baoHanh").value;
        var gia = document.getElementById("gia").value;
        var soLuong = document.getElementById("soLuong").value;
        var khoiLuong = document.getElementById("khoiLuong").value;
        var kichThuoc = document.getElementById("kichThuoc").value;
        var congKetNoi = document.getElementById("congKetNoi").value;
        var manHinh = document.getElementById("manHinh").value;
        var giamGia = document.getElementById("giamGia").value;
        var gift = document.getElementById("gift").value;
        var banPhim = document.getElementById("banPhim").value;
        var item = angular.copy($scope.form);
        if (productName != "" && brand != "" && category != "" && banPhim != "" 
            && pin != "" && ram != "" && luuTru != "" && cpu != "" && cpuSerie != "" && chipDoHoa != "" 
            && color != "" && heDieuHanh != "" && congXuatHinh != "" && soCongLuuTruToiDa != "" && baoHanh != "" 
            && gia != "" && soLuong != "" && khoiLuong != "" && kichThuoc != "" && congKetNoi != "" 
            && manHinh != "" && giamGia != "" && gift != "" && giamGia>=0 && giamGia<=100 && gia>=0 && soLuong>=0 
        ){
            $http.post(`/rest/products`, item).then(resp => {
                $scope.items.push(resp.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Hoàn thành',
                    text: 'Thêm mới Sản phẩm thành công!',
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
        $http.put(`/rest/products/${item.productId}`, item).then(resp => {
            var index = $scope.items.findIndex(c => c.productId == item.productId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật Sản phẩm thành công!',
            })
            $(".nav-tabs a:eq(1)").tab('show')
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật Sản phẩm thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa sp
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa sản phẩm này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/products/${item.productId}`).then(resp => {
                    var index = $scope.items.findIndex(c => c.productId == item.productId);
                    $scope.items.splice(index, 1);
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Sản phẩm đã xóa thành công',
                        'success'
                    )
                    $(".nav-tabs a:eq(1)").tab('show')
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa Sản phẩm thất bại!',
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
            $scope.form.anhChinh = resp.data.name;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Lỗi upload hình ảnh!',
            })
            console.log("Error", error);
        })
    }

    $scope.imageChanged1 = function (files) {
        var data = new FormData();
        data.append('file', files[0]);
        $http.post('/rest/upload/images', data, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(resp => {
            $scope.form.anhPhu1 = resp.data.name;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Lỗi upload hình ảnh!',
            })
            console.log("Error", error);
        })
    }

    $scope.imageChanged2 = function (files) {
        var data = new FormData();
        data.append('file', files[0]);
        $http.post('/rest/upload/images', data, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(resp => {
            $scope.form.anhPhu2 = resp.data.name;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Lỗi upload hình ảnh!',
            })
            console.log("Error", error);
        })
    }

    $scope.imageChanged3 = function (files) {
        var data = new FormData();
        data.append('file', files[0]);
        $http.post('/rest/upload/images', data, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(resp => {
            $scope.form.anhPhu3 = resp.data.name;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Lỗi upload hình ảnh!',
            })
            console.log("Error", error);
        })
    }

    $scope.imageChanged4 = function (files) {
        var data = new FormData();
        data.append('file', files[0]);
        $http.post('/rest/upload/images', data, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(resp => {
            $scope.form.anhPhu4 = resp.data.name;
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

    $scope.pager1 = {
        page: 0,
        size: 5,
        get productGiamGia() {
            var start = this.page * this.size;
            return $scope.productGiamGia.slice(start, start + this.size);
        },
        get count() {
            return Math.ceil(1.0 * $scope.productGiamGia.length / this.size);
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