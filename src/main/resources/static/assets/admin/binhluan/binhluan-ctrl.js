app.controller("binhluan-ctrl", function($scope, $http, $location){
    $scope.items = [];
    $scope.form = {
        // customer: "",
        // productId: "",
        // noiDung: ""
        // description: ""
    };
    $scope.selectBinhLuanChuaReply = [];

    // $scope.stars = [];
    $scope.initialize = function(){
        //load category
        $http.get("/rest/binhluans").then(resp => {
            $scope.items = resp.data;
        });
        $http.get("/rest/binhluans/selectBinhLuanChuaReply").then(resp => {
            $scope.selectBinhLuanChuaReply = resp.data;
        });
        $scope.form = {
            // customer: "",
            // productId: "",
            // noiDung: ""
        };
        // $http.get("/rest/stars").then(resp => {
        //     $scope.stars = resp.data;
        // });
        $scope.titleForm="Cập Nhật Bình Luận";
    }
    //khoi dau
    $scope.initialize();

    //xoa form
    $scope.reset= function(){
        $scope.form = {
            // customer: "",
            // productId: "",
            // noiDung: ""
        };
    }
    $scope.resetReply = function(){
        $scope.form = {
            reply: ""
        }
    }
    $scope.fillStatus = true;
    $scope.buttonFill=true;
    $scope.goToAdd = function(){
        $(".nav-tabs a:eq(0)").tab('show')
        $scope.titleForm="Thêm mới Bình Luận";
        $scope.fillStatus = true;
    }

    //hien thi len form
    $scope.edit = function(item){
        $scope.form = angular.copy(item);
        $scope.titleForm="Cập nhật Bình Luận";
        $scope.fillStatus = false;
        $(".nav-tabs a:eq(0)").tab('show')
    }

    $scope.reply = function(item){
        $scope.form = angular.copy(item);
        $scope.titleForm="Trả lời bình luận";
        $(".nav-tabs a:eq(3)").tab('show')
    }

    //them bp moi
    $scope.create = function(){
        var item = angular.copy($scope.form);
        $http.post(`/rest/binhluans`, item).then(resp => {
            $scope.items.push(resp.data);
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Thêm mới bình luận thành công!',
            })
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Thêm mới bình luận thất bại!',
            })
            console.log("Error", error);
        })
        $scope.initialize();
    }
    //cap nhat bp
    $scope.update = function(){
        var item = angular.copy($scope.form);
        $http.put(`/rest/binhluans/${item.ratingId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.ratingId == item.ratingId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Cập nhật bình luận thành công!',
            })
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Cập nhật bình luận thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }

    $scope.updateReply = function(){
        var item = angular.copy($scope.form);
        $http.put(`/rest/binhluans/${item.ratingId}`, item).then(resp => {
            var index = $scope.items.findIndex(b => b.ratingId == item.ratingId);
            $scope.items[index] = item;
            Swal.fire({
                icon: 'success',
                title: 'Hoàn thành',
                text: 'Trả lời bình luận thành công!',
            })
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Trả lời bình luận thất bại!',
            })
            console.log("Error", error);
            $scope.initialize();
        })
        $scope.initialize();
    }
    //xoa bp
    $scope.delete = function(item){
        Swal.fire({
            title: 'Bạn có muốn xóa bình luận này không?',
            text: "Bạn sẽ không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
        }).then((result) => {
            if (result.isConfirmed) {
        $http.delete(`/rest/binhluans/${item.ratingId}`).then(resp => {
            var index = $scope.items.findIndex(b => b.ratingId == item.ratingId);
            $scope.items.splice(index, 1);
            Swal.fire(
                'Xóa Thành Công!',
                'Bình luận đã xóa thành công',
                'success'
            )
            $scope.initialize();
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Xóa bình luận thất bại!',
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
        get items(){
            var start = this.page * this.size;
            return $scope.items.slice(start, start + this.size);
        },
        get count(){
            return Math.ceil(1.0 * $scope.items.length / this.size);
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
        get selectBinhLuanChuaReply(){
            var start = this.page * this.size;
            return $scope.selectBinhLuanChuaReply.slice(start, start + this.size);
        },
        get count(){
            return Math.ceil(1.0 * $scope.selectBinhLuanChuaReply.length / this.size);
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