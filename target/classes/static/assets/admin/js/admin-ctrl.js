app = angular.module("admin-app", ["ngRoute"]);
//controller
app.controller("admin-ctrl", function ($scope, $http, $location) {
    $scope.item;
    $scope.initialize = function () {
        $http.get("/rest/accounts/index").then(resp => {
            $scope.item = resp.data;
        });
    }
    $scope.initialize();
    // $scope.scroll = function () {
    //     $window.scrollTo(0, 0);  
    //   };
    $scope.logOut = function () {
        Swal.fire({
            title: 'Bạn có muốn đăng xuất?',
            text: "Bạn chắc chứ ?!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                let timerInterval
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Đăng xuất thành công!',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                })
                    .then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                            location.href = "/security/logoff";
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Thất bại',
                            text: 'Đăng xuất thất bại!',
                        })
                        console.log("Error", error);

                    })
            }
        })

    }
});

//single page
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/assets/admin/trangchu/main-content.html",
            controller: "main-content-ctrl"
        })
        //product
        .when("/product", {
            templateUrl: "/assets/admin/product/index.html",
            controller: "product-ctrl"
        })
        //category
        .when("/category", {
            templateUrl: "/assets/admin/category/index.html",
            controller: "category-ctrl"
        })
        //brand
        .when("/brand", {
            templateUrl: "/assets/admin/brand/index.html",
            controller: "brand-ctrl"
        })
        //banphim
        .when("/banphim", {
            templateUrl: "/assets/admin/banphim/index.html",
            controller: "banphim-ctrl"
        })
        .when("/authority", {
            templateUrl: "/assets/admin/authority/index.html",
            controller: "authority-ctrl"
        })
        //socongluutrutoida
        .when("/socongluutrutoida", {
            templateUrl: "/assets/admin/socongluutrutoida/index.html",
            controller: "socongluutrutoida-ctrl"
        })
        //ram
        .when("/ram", {
            templateUrl: "/assets/admin/ram/index.html",
            controller: "ram-ctrl"
        })
        //pin
        .when("/pin", {
            templateUrl: "/assets/admin/pin/index.html",
            controller: "pin-ctrl"
        })
        //phukiendikem
        .when("/phukiendikem", {
            templateUrl: "/assets/admin/phukiendikem/index.html",
            controller: "phukiendikem-ctrl"
        })
        //congketnoi
        .when("/congketnoi", {
            templateUrl: "/assets/admin/congketnoi/index.html",
            controller: "congketnoi-ctrl"
        })
        //congxuathinh
        .when("/congxuathinh", {
            templateUrl: "/assets/admin/congxuathinh/index.html",
            controller: "congxuathinh-ctrl"
        })
        //color
        .when("/color", {
            templateUrl: "/assets/admin/color/index.html",
            controller: "color-ctrl"
        })
        //chipdohoa
        .when("/chipdohoa", {
            templateUrl: "/assets/admin/chipdohoa/index.html",
            controller: "chipdohoa-ctrl"
        })
        //cpu
        .when("/cpu", {
            templateUrl: "/assets/admin/cpu/index.html",
            controller: "cpu-ctrl"
        })
        //cpuserie
        .when("/cpuserie", {
            templateUrl: "/assets/admin/cpuserie/index.html",
            controller: "cpuserie-ctrl"
        })
        //manhinh
        .when("/manhinh", {
            templateUrl: "/assets/admin/manhinh/index.html",
            controller: "manhinh-ctrl"
        })
        //luutru
        .when("/luutru", {
            templateUrl: "/assets/admin/luutru/index.html",
            controller: "luutru-ctrl"
        })
        //hedieuhanh
        .when("/hedieuhanh", {
            templateUrl: "/assets/admin/hedieuhanh/index.html",
            controller: "hedieuhanh-ctrl"
        })
        //gift
        .when("/gift", {
            templateUrl: "/assets/admin/gift/index.html",
            controller: "gift-ctrl"
        })
        //binhluan
        .when("/binhluan", {
            templateUrl: "/assets/admin/binhluan/index.html",
            controller: "binhluan-ctrl"
        })
        //binhluan
        .when("/order", {
            templateUrl: "/assets/admin/order/index.html",
            controller: "order-ctrl"
        })
        //thongke-doanhthu-theodanhmuc
        .when("/thongke-doanhthu-theodanhmuc", {
            templateUrl: "/assets/admin/thongke/thongKeDoanhThuTheoDanhMuc.html",
            controller: "thongke-ctrl"
        })
        //thongke-doanhthu-theothuonghieu
        .when("/thongke-doanhthu-theothuonghieu", {
            templateUrl: "/assets/admin/thongke/thongKeDoanhThuTheoThuongHieu.html",
            controller: "thongke-ctrl"
        })
        //thongke-doanhthu-theosanpham
        .when("/thongke-doanhthu-theosanpham", {
            templateUrl: "/assets/admin/thongke/thongKeDoanhThuTheoSanPham.html",
            controller: "thongke-ctrl"
        })
        //thongke-doanhthu-theonam
        .when("/thongke-doanhthu-theonam", {
            templateUrl: "/assets/admin/thongke/thongKeDoanhThuTheoNam.html",
            controller: "thongke-ctrl"
        })
        //thongke-doanhthu-theothang
        .when("/thongke-doanhthu-theothang", {
            templateUrl: "/assets/admin/thongke/thongKeDoanhThuTheoThang.html",
            controller: "thongke-ctrl"
        })
        //thongke-doanhthu-theoquy
        .when("/thongke-doanhthu-theoquy", {
            templateUrl: "/assets/admin/thongke/thongKeDoanhThuTheoQuy.html",
            controller: "thongke-ctrl"
        })
        //thongke-top10-sanphambanchaynhat
        .when("/thongke-top10-sanphambanchaynhat", {
            templateUrl: "/assets/admin/thongke/thongKeTop10SanPhamBanChayNhat.html",
            controller: "thongke-ctrl"
        })
        //thongke-top5-thuonghieubanchaynhat
        .when("/thongke-top5-thuonghieubanchaynhat", {
            templateUrl: "/assets/admin/thongke/thongKeTop5ThuongHieuBanChayNhat.html",
            controller: "thongke-ctrl"
        })
        //thongke-top5-danhmucbanchaynhat
        .when("/thongke-top5-danhmucbanchaynhat", {
            templateUrl: "/assets/admin/thongke/thongKeTop5DanhMucBanChayNhat.html",
            controller: "thongke-ctrl"
        })
        //thongke-top10-khachhangmuahangnhieunhat
        .when("/thongke-top10-khachhangmuahangnhieunhat", {
            templateUrl: "/assets/admin/thongke/thongKeTop10KhachHangMuaHangNhieuNhat.html",
            controller: "thongke-ctrl"
        })
        .when("/doitra", {
            templateUrl: "/assets/admin/doitra/index.html",
            controller: "doitra-ctrl"
        })
        .when("/thongke-khachhanghuydonnhieu", {
            templateUrl: "/assets/admin/thongke/thongke-khachhanghuydonnhieu.html",
            controller: "thongke-ctrl"
        })
        .when("/profile", {
            templateUrl: "/assets/admin/account/profile.html",
            controller: "account-ctrl"
        })
        .otherwise({
            redirectTo: "/"
        })
})