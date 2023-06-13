app.controller("account-ctrl", function ($scope, $http) {


  $scope.items = [];
  $scope.form = {
    avatar: "",

  };

  $scope.initialize = function () {

    //load account	
    $http.get("/rest/accounts").then(resp => {

      $scope.items = resp.data;
      $scope.items.forEach(item => {

        item.createDate = new Date(item.createDate)

      })

    });

    $scope.form = {
      createDate: new Date(),
      avatar: 'no-image.jpg',

    };
  }

  $scope.initialize();


  $scope.readload = function () {
    $http.get("/rest/accounts").then(resp => {

      $scope.items = resp.data;
      $scope.items.forEach(item => {

        item.createDate = new Date(item.createDate)

      })

    });
  }

  $scope.create = function () {
    var item = angular.copy($scope.form);
    $http.post('/rest/accounts', item).then(resp => {
      resp.data.createDate = new Date(resp.data.createDate)
      $scope.items.push(resp.data);
      $scope.reset();
      Swal.fire({
				icon: 'success',
				title: 'Thành công',
				text: 'Đăng ký thành công!',
			})



      let timerInterval
				Swal.fire({
					icon: 'success',
					title: 'Đăng ký thành công',
					text: 'Vui lòng kiểm tra email của bạn để xác nhận tài khoản',
					timer: 2000,
					timerProgressBar: true,
					didOpen: () => {
						Swal.showLoading()
					
					
					},
					willClose: () => {
						clearInterval(timerInterval)
					}
				}).then((result) => {
					/* Read more about handling dismissals below */
					if (result.dismiss === Swal.DismissReason.timer) {
						console.log('I was closed by the timer')
						location.href = "/security/login/form";
					}
				})




    }).catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Thất bại',
        text: 'Đăng ký thất bại !',
      })

      console.log("Error", error);
    });
  }

  $scope.imageChanged = function (files) {
    var data = new FormData();
    data.append('file', files[0]);
    $http.post('/rest/upload/images', data, {
      transformRequest: angular.identity,
      headers: { 'Content-Type': undefined }
    }).then(resp => {
      $scope.form.avatar = resp.data.name;
    }).catch(error => {
      alert("Lỗi upload hình ảnh !");
      console.log("Error", error);
    })
  }

  $scope.reset = function () {
    $scope.form = {
      createDate: new Date(),
      avatar: 'no-image.jpg',
      available: true,

    };
  }
 
  /*
   AngularJS v1.4.8
   (c) 2010-2015 Google, Inc. http://angularjs.org
   License: MIT
  */

});
