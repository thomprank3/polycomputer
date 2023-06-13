app.controller("thongke-ctrl", function($scope, $http, $location){
    $scope.top5ThuongHieuBanChay = [];
    $scope.top10SpBanChay = [];
    $scope.top5DanhMucBanChay = [];
    $scope.top10KhachHangMuaHangNhieuNhat = [];
    $scope.thongKeDoanhThuTheoThang = [];
    $scope.thongKeDoanhThuTheoQuy = [];
    $scope.thongKeDoanhThuTheoNam = [];
    $scope.thongKeDoanhThuTheoDanhMuc = [];
    $scope.thongKeDoanhThuTheoThuongHieu = [];
    $scope.thongKeDoanhThuTheoSanPham = [];
    $scope.selectTopKhachHangHuyDonNhieuNhat = [];
    $scope.initialize = function(){
        //load category
        $http.get("/rest/orders").then(resp => {
            $scope.tab1 = resp.data;
           
        });
        // $http.get("/rest/orders/thanhcong").then(resp => {
        //     $scope.tab2 = resp.data;
         
        // });
        $http.get("/rest/orders/selectTopKhachHangHuyDonNhieuNhat").then(resp => {
            $scope.selectTopKhachHangHuyDonNhieuNhat = resp.data;
            
        });
        $http.get("/rest/orderdetails/thongKe10SanPhamBanChayNhat").then(resp => {
            $scope.top10SpBanChay = resp.data;
            
        });
        $http.get("/rest/orderdetails/thongKe5ThuongHieuBanChayNhat").then(resp => {
            $scope.top5ThuongHieuBanChay = resp.data;
            
        });
        $http.get("/rest/orderdetails/thongKe5DanhMucBanChayNhat").then(resp => {
            $scope.top5DanhMucBanChay = resp.data;
        });
        $http.get("/rest/orderdetails/thongKe10KhachHangMuaHangNhieuNhat").then(resp => {
            $scope.top10KhachHangMuaHangNhieuNhat = resp.data;
        });
        $http.get("/rest/orderdetails/thongKeDoanhThuTheoThang").then(resp => {
            $scope.thongKeDoanhThuTheoThang = resp.data;
        });
        $http.get("/rest/orderdetails/thongKeDoanhThuTheoQuy").then(resp => {
            $scope.thongKeDoanhThuTheoQuy = resp.data;
        });
        $http.get("/rest/orderdetails/thongKeDoanhThuTheoNam").then(resp => {
            $scope.thongKeDoanhThuTheoNam = resp.data;
        });
        $http.get("/rest/orderdetails/thongKeDoanhThuTheoDanhMuc").then(resp => {
            $scope.thongKeDoanhThuTheoDanhMuc = resp.data;
        });
        $http.get("/rest/orderdetails/thongKeDoanhThuTheoThuongHieu").then(resp => {
            $scope.thongKeDoanhThuTheoThuongHieu = resp.data;
        });
        $http.get("/rest/orderdetails/thongKeDoanhThuTheoSanPham").then(resp => {
            $scope.thongKeDoanhThuTheoSanPham = resp.data;
        });
    }
    //khoi dau
    $scope.initialize();

    //phan trang
    $scope.pager1 = {
        page: 0,
        size: 5,
        get thongKeDoanhThuTheoDanhMuc(){
            var start = this.page * this.size;
            return $scope.thongKeDoanhThuTheoDanhMuc.slice(start, start + this.size);
        },
        get count(){
            return Math.ceil(1.0 * $scope.thongKeDoanhThuTheoDanhMuc.length / this.size);
        },
        first(){
            this.page = 0;
        },
        prev(){
            this.page--;
            if(this.page < 0){
                this.last();
            }
        },
        next(){
            this.page++;
            if(this.page >= this.count){
                this.first();
            }
        },
        last(){
            this.page = this.count - 1;
        }
    }
    $scope.pager2 = {
        page: 0,
        size: 5,
        get thongKeDoanhThuTheoThuongHieu(){
            var start = this.page * this.size;
            return $scope.thongKeDoanhThuTheoThuongHieu.slice(start, start + this.size);
        },
        get count(){
            return Math.ceil(1.0 * $scope.thongKeDoanhThuTheoThuongHieu.length / this.size);
        },
        first(){
            this.page = 0;
        },
        prev(){
            this.page--;
            if(this.page < 0){
                this.last();
            }
        },
        next(){
            this.page++;
            if(this.page >= this.count){
                this.first();
            }
        },
        last(){
            this.page = this.count - 1;
        }
    }
    $scope.pager3 = {
        page: 0,
        size: 5,
        get thongKeDoanhThuTheoSanPham(){
            var start = this.page * this.size;
            return $scope.thongKeDoanhThuTheoSanPham.slice(start, start + this.size);
        },
        get count(){
            return Math.ceil(1.0 * $scope.thongKeDoanhThuTheoSanPham.length / this.size);
        },
        first(){
            this.page = 0;
        },
        prev(){
            this.page--;
            if(this.page < 0){
                this.last();
            }
        },
        next(){
            this.page++;
            if(this.page >= this.count){
                this.first();
            }
        },
        last(){
            this.page = this.count - 1;
        }
    }

    $scope.pager4 = {
        page: 0,
        size: 5,
        get selectTopKhachHangHuyDonNhieuNhat(){
            var start = this.page * this.size;
            return $scope.selectTopKhachHangHuyDonNhieuNhat.slice(start, start + this.size);
        },
        get count(){
            return Math.ceil(1.0 * $scope.selectTopKhachHangHuyDonNhieuNhat.length / this.size);
        },
        first(){
            this.page = 0;
        },
        prev(){
            this.page--;
            if(this.page < 0){
                this.last();
            }
        },
        next(){
            this.page++;
            if(this.page >= this.count){
                this.first();
            }
        },
        last(){
            this.page = this.count - 1;
        }
    }
});