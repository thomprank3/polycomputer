app.controller("category-ctrl", function($scope, $http, $location){
    $scope.items = [];
    $scope.form = {};

    $scope.initialize = function(){
        //load category
        $http.get("/rest/categories").then(resp => {
            $scope.items = resp.data;
        });
    }
    //khoi dau
    $scope.initialize();

    //xoa form
    $scope.reset= function(){
        $scope.form = {
            name: ""
        };
    }

    $scope.go = function(path){
        $location.path(path);
    }

    //hien thi len form
    $scope.edit = function(item){
        $scope.form = angular.copy(item);
        $location.path("/edit-category");
        console.log("dc")
    }

    //them sp moi
    $scope.create = function(){
        var item = angular.copy($scope.form);
        $http.post(`/rest/categories`, item).then(resp => {
            $scope.items.push(resp.data);
            $scope.reset();
            alert("Them moi category thanh cong!");
        }).catch(error => {
            alert("Loi them moi category!");
            console.log("Error", error);
        })
    }
    //cap nhat sp
    $scope.update = function(){
        var item = angular.copy($scope.form);
        $http.put(`/rest/categories/${item.categoryId}`, item).then(resp => {
            var index = $scope.items.findIndex(c => c.categoryId == item.categoryId);
            $scope.items[index] = item;
            alert("Cap nhat category thanh cong!");
        }).catch(error => {
            alert("Loi cap nhat category!");
            console.log("Error", error);
        })
    }
    //xoa sp
    $scope.delete = function(item){
        $http.delete(`/rest/categories/${item.categoryId}`).then(resp => {
            var index = $scope.items.findIndex(c => c.categoryId == item.categoryId);
            $scope.items.splice(index, 1);
            $scope.reset();
            alert("Xoa category thanh cong!");
        }).catch(error => {
            alert("Loi xoa category!");
            console.log("Error", error);
        })
    }

    $scope.imageChanged = function(files){
        var data = new FormData();
        data.append('file', files[0]);
        $http.post('/rest/upload/images', data, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(resp => {
            $scope.form.categoryImage = resp.data.name;
        }).catch(error => {
            alert("Loi upload hinh anh");
            console.log("Error", error);
        })
    }

    //phan trang
    // $scope.pager = {
    //     page: 0,
    //     size: 10,
    //     get items(){
    //         var start = this.page * this.size;
    //         return $scope.items.slice(start, start + this.size);
    //     },
    //     get count(){
    //         return Math.ceil(1.0 * $scope.items.length / this.size);
    //     },
    //     first(){
    //         this.page = 0;
    //     },
    //     prev(){
    //         this.page--;
    //         if(this.page < 0){
    //             this.last();
    //         }
    //     },
    //     next(){
    //         this.page++;
    //         if(this.page >= this.count){
    //             this.first();
    //         }
    //     },
    //     last(){
    //         this.page = this.count - 1;
    //     }
    // }
});