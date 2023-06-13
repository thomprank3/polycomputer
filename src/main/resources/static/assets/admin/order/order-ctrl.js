app.controller("order-ctrl", function ($scope, $http, $location) {
    $scope.items1 = [];
    $scope.items2 = [];
    $scope.items3 = [];
    $scope.items4 = [];
    $scope.items5 = [];
    $scope.statuses = [];
    $scope.initialize = function () {
        $http.get("/rest/orders/selectDonHangChoXacNhan").then(resp => {
            $scope.items1 = resp.data;
        });
        $http.get("/rest/orders/selectDonHangDaXacNhan").then(resp => {
            $scope.items2 = resp.data;
        });
        $http.get("/rest/orders/selectDonHangDangGiaoHang").then(resp => {
            $scope.items3 = resp.data;
        });
        $http.get("/rest/orders/selectDonHangDaNhanHang").then(resp => {
            $scope.items4 = resp.data;
        });
        $http.get("/rest/orders/selectDonHangDaHuy").then(resp => {
            $scope.items5 = resp.data;
        });
        $http.get("/rest/statuses").then(resp => {
            $scope.statuses = resp.data;
        });
    }
    //khoi dau
    $scope.initialize();
    $scope.fillStatus = true;
    $scope.buttonFill = true;
    //hien thi len form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $scope.titleForm = "Cập nhật Đơn Hàng";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }
    $scope.exportDaXacNhan = function () {
        location.href = "/rest/orders/exportDaXacNhan";
    }
    $scope.exportDaNhanHang = function () {
        location.href = "/rest/orders/exportDaNhanHang";
    }
    $scope.exportDangGiaoHang = function () {
        location.href = "/rest/orders/exportDangGiaoHang";
    }
    $scope.exportHuy = function () {
        location.href = "/rest/orders/exportHuy";
    }
    $scope.exportChoXacNhan = function () {
        location.href = "/rest/orders/exportChoXacNhan";
    }
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/orders/${item.orderId}`, item).then(resp => {
            (b => b.orderId == item.orderId);
            $scope.items = item;
            $scope.initialize();
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật Đơn hàng thành công!',
            })
        }).catch(error => {
            $scope.initialize();
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật Đơn hàng thất bại!',
            })
            console.log("Error", error);
        })
        $scope.initialize();
    }
    $scope.delete = function (item) {
        Swal.fire({
            title: 'Bạn có muốn xóa đơn hàng này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
                $http.delete(`/rest/orders/${item.orderId}`).then(resp => {
                    var index = $scope.items.findIndex(b => b.orderId == item.orderId);
                    $scope.items.splice(index, 1);
                    $scope.initialize();
                    Swal.fire(
                        'Xóa Thành Công!',
                        'Đơn hàng đã xóa thành công',
                        'success'
                    )
                    $scope.initialize();
                }).catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại',
                        text: 'Xóa Đơn hàng thất bại!',
                    })
                    console.log("Error", error);
                    $scope.initialize();
                })
            }
        })
        $scope.initialize();
    }

    // phan trang
    $scope.pager1 = {
        page1: 0,
        size1: 5,
        get items1() {
            var start1 = this.page1 * this.size1;
            return $scope.items1.slice(start1, start1 + this.size1);
        },
        get count1() {
            return Math.ceil(1.0 * $scope.items1.length / this.size1);
        },
        first1() {
            this.page1 = 0;
        },
        prev1() {
            this.page1--;
            if (this.page1 < 0) {
                this.last1();
            }
        },
        next1() {
            this.page1++;
            if (this.page1 >= this.count1) {
                this.first1();
            }
        },
        last1() {
            this.page1 = this.count1 - 1;
        }
    }
    $scope.pager2 = {
        page2: 0,
        size2: 5,
        get items2() {
            var start2 = this.page2 * this.size2;
            return $scope.items2.slice(start2, start2 + this.size2);
        },
        get count2() {
            return Math.ceil(1.0 * $scope.items2.length / this.size2);
        },
        first2() {
            this.page2 = 0;
        },
        prev2() {
            this.page2--;
            if (this.page2 < 0) {
                this.last2();
            }
        },
        next2() {
            this.page2++;
            if (this.page2 >= this.count2) {
                this.first2();
            }
        },
        last2() {
            this.page2 = this.count2 - 1;
        }
    }
    $scope.pager3 = {
        page3: 0,
        size3: 5,
        get items3() {
            var start3 = this.page3 * this.size3;
            return $scope.items3.slice(start3, start3 + this.size3);
        },
        get count3() {
            return Math.ceil(1.0 * $scope.items3.length / this.size3);
        },
        first3() {
            this.page3 = 0;
        },
        prev3() {
            this.page3--;
            if (this.page3 < 0) {
                this.last3();
            }
        },
        next3() {
            this.page3++;
            if (this.page3 >= this.count3) {
                this.first3();
            }
        },
        last3() {
            this.page3 = this.count3 - 1;
        }
    }
    $scope.pager4 = {
        page4: 0,
        size4: 5,
        get items4() {
            var start4 = this.page4 * this.size4;
            return $scope.items4.slice(start4, start4 + this.size4);
        },
        get count4() {
            return Math.ceil(1.0 * $scope.items4.length / this.size4);
        },
        first4() {
            this.page4 = 0;
        },
        prev4() {
            this.page4--;
            if (this.page4 < 0) {
                this.last4();
            }
        },
        next4() {
            this.page4++;
            if (this.page4 >= this.count4) {
                this.first4();
            }
        },
        last4() {
            this.page4 = this.count4 - 1;
        }
    }
    $scope.pager5 = {
        page5: 0,
        size5: 5,
        get items5() {
            var start5 = this.page5 * this.size5;
            return $scope.items5.slice(start5, start5 + this.size5);
        },
        get count5() {
            return Math.ceil(1.0 * $scope.items5.length / this.size5);
        },
        first5() {
            this.page5 = 0;
        },
        prev5() {
            this.page5--;
            if (this.page < 0) {
                this.last5();
            }
        },
        next5() {
            this.page5++;
            if (this.page5 >= this.count5) {
                this.first5();
            }
        },
        last5() {
            this.page5 = this.count5 - 1;
        }
    }
});