
const app = angular.module("shopping-cart-app", []);
app.controller("shopping-cart-ctrl", function ($scope, $http) {

	$scope.cart = {
		items: [],
		add(productId) {
						//  $http.put(`/rest/products/updatesoluong/${item.productId}`);

			Swal.fire({
				icon: 'success',
				title: 'Thành công',
				text: 'Sản phẩm đã được thêm vào giỏ hàng!',
			})

			var item = this.items.find(item => item.productId == productId);
			if (item) {
				item.qty++;
				this.saveToLocalStorage();
			} else {
				$http.get(`/rest/products/${productId}`).then(resp => {
					resp.data.qty = 1;
					this.items.push(resp.data);
					this.saveToLocalStorage();

				})
			}
		},
		// add(productId) {
		// 	var item = this.items.find(item => item.productId == productId);
		// 	if (item) {
		// 		item.qty++;
		// 		this.saveToLocalStorage();

		// 	} else {
		// 		$http.get(`/rest/products/${productId}`).then(resp => {
		// 			resp.data.qty = 1;
		// 			this.items.push(resp.data);
		// 			this.saveToLocalStorage();

		// 		})
		// 	}
		// },
		muangay(productId) {
			Swal.fire({
				icon: 'success',
				title: 'Thành công',
				text: 'Sản phẩm đã được thêm vào giỏ hàng!',
			})

			var item = this.items.find(item => item.productId == productId);
			if (item) {
				item.qty++;
				this.saveToLocalStorage();


			} else {
				$http.get(`/rest/products/${productId}`).then(resp => {
					resp.data.qty = 1;
					this.items.push(resp.data);
					this.saveToLocalStorage();

				})
			}
		},

		remove(productId) {
			var index = this.items.findIndex(item => item.productId == productId);
			this.items.splice(index, 1);
			this.saveToLocalStorage();
			Swal.fire({
				icon: 'success',
				title: 'Thành công',
				text: 'Đã xóa sản phẩm khỏi giỏ hàng!',
			})


		},
		clear(productId) {
			this.items = []
			this.saveToLocalStorage();

		},
		atm_of(item) { },
		get count() {
			return this.items
				.map(item => item.qty)
				.reduce((total, qty) => total += qty, 0);
		},
		get amount() {
			return this.items
				.map(item => item.qty * (item.gia - (item.gia * item.giamGia / 100)))
				.reduce((total, qty) => total += qty, 0);
		},
		get tong() {
			return this.items
				.map(item => item.qty * item.gia)
				.reduce((total, qty) => total += qty, 0);
		},
		get giamgia() {
			return this.items
				.map(item => item.qty * ((item.gia * (item.giamGia / 100))))
				.reduce((total, qty) => total += qty, 0);
		},

		saveToLocalStorage() {
			var json = JSON.stringify(angular.copy(this.items));
			localStorage.setItem("cart", json);
		},

		loadFromLocalStorage() {
			var json = localStorage.getItem("cart");
			this.items = json ? JSON.parse(json) : [];
		},

		addAndBuy(productId) {

			$scope.cart.clear();

			var item = this.items.find(item => item.productId == productId);
			if (item) {
				item.qty++;
				this.saveToLocalStorage();
			} else {
				$http.get(`/rest/products/${productId}`).then(resp => {
					resp.data.qty = 1;
					this.items.push(resp.data);
					this.saveToLocalStorage();

				})
				location.href = "/cart/view";
			}
		},

	}
	$scope.cartlike = {
		items: [],
		add(productId) {

			Swal.fire({
				icon: 'success',
				title: 'Thành công',
				text: 'Sản phẩm đã được thêm vào danh sách yêu thích!',
			})

			var item = this.items.find(item => item.productId == productId);
			if (item) {
				Swal.fire({
					icon: 'success',
					text: 'Sản phẩm đã được thêm vào danh sách yêu thích từ trước!',
				})
			} else {
				$http.get(`/rest/products/${productId}`).then(resp => {
					resp.data.qty = 1;
					this.items.push(resp.data);
					this.saveToLocalStorage();

				})
			}
		},

		remove(productId) {
			var index = this.items.findIndex(item => item.productId == productId);
			this.items.splice(index, 1);
			this.saveToLocalStorage();
			Swal.fire({
				icon: 'success',
				title: 'Thành công',
				text: 'Đã xóa sản phẩm khỏi danh sách yêu thích!',
			})


		},

		clear(productId) {
			this.items = []
			this.saveToLocalStorage();

		},


		saveToLocalStorage() {
			var json = JSON.stringify(angular.copy(this.items));
			localStorage.setItem("cartlike", json);
		},

		loadFromLocalStorage() {
			var json = localStorage.getItem("cartlike");
			this.items = json ? JSON.parse(json) : [];
		},



	}
	$scope.cartSsSp1 = {
		items: [],
		add(productId) {

			$scope.cartSsSp1.clear();

			var item = this.items.find(item => item.productId == productId);
			if (item) {
				Swal.fire({
					icon: 'success',
					text: 'Sản phẩm đã được thêm vào danh sách yêu thích từ trước!',
				})
			} else {

				$http.get(`/rest/products/${productId}`).then(resp => {

					this.items.push(resp.data);
					this.saveToLocalStorage();

				})
			}
			location.href = "/product/sosanh/sosanh1";
		},


		clear(productId) {
			this.items = []
			this.saveToLocalStorage();

		},


		saveToLocalStorage() {
			var json = JSON.stringify(angular.copy(this.items));
			localStorage.setItem("cartSsSp1", json);
		},

		loadFromLocalStorage() {
			var json = localStorage.getItem("cartSsSp1");
			this.items = json ? JSON.parse(json) : [];
		},



	}
	$scope.cartSsSp2 = {
		items: [],
		add(productId) {

			$scope.cartSsSp2.clear();

			var item = this.items.find(item => item.productId == productId);
			if (item) {
				Swal.fire({
					icon: 'success',
					text: 'Sản phẩm đã được thêm vào danh sách yêu thích từ trước!',
				})
			} else {

				$http.get(`/rest/products/${productId}`).then(resp => {

					this.items.push(resp.data);
					this.saveToLocalStorage();

				})
			}
			location.href = "/product/sosanh/sosanh2";
		},


		clear(productId) {
			this.items = []
			this.saveToLocalStorage();

		},


		saveToLocalStorage() {
			var json = JSON.stringify(angular.copy(this.items));
			localStorage.setItem("cartSsSp2", json);
		},

		loadFromLocalStorage() {
			var json = localStorage.getItem("cartSsSp2");
			this.items = json ? JSON.parse(json) : [];
		},



	}
	$scope.cart.loadFromLocalStorage();
	$scope.cartlike.loadFromLocalStorage();
	$scope.cartSsSp1.loadFromLocalStorage();
	$scope.cartSsSp2.loadFromLocalStorage();


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
				$scope.cart.clear();
				$scope.cartlike.clear();
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



	$scope.order = {

		createdAt: new Date(),
		address: "",
		phoneNumber: "",
		description: "",
		fullName: "",
		statusId: {
			statusId: 1,
		},

		tongTienThanhToan: $scope.cart.amount,
		
		account: {
			username: $("#username").text(),


		},
		get orderDetails() {

			return $scope.cart.items.map(item => {
				return {

					productId: { productId: item.productId, },
					gia: item.gia,
					tongTienSanPham: (item.gia - (item.gia * item.giamGia / 100)) * item.qty,
					soLuong: item.qty,

				}
			});
		},




		purchase() {
			var phonenumber = document.getElementById("phoneNumber").value;
			var fullname = document.getElementById("fullName").value;
			var address = document.getElementById("address").value;
			if (phonenumber.length == 10 && fullname != "" && address != "") {
			
				var order = angular.copy(this);
				$http.post("/rest/orders", order).then(resp => {


					$scope.cart.clear();



					let timerInterval
					Swal.fire({
						icon: 'success',
						title: 'Đặt hàng thành công !',
						text: 'Cảm ơn bạn đã tin dùng',
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
						
							location.href = "/order/detail/" + resp.data.orderId;
						}
					})





				}).catch(error => {


					console.log(error)
				})

			}
			else {

				Swal.fire({
					icon: 'error',
					title: 'Thất bại',
					text: 'Đặt hàng thất bại ! , Vui lòng kiểm tra các thông tin bị báo đỏ',
				})




			}

		},





	}

	$scope.rating = {
		createdAt: new Date(),
		noiDung: "",
		starId: $("#starId").text(),
		product: {
			productId: $("#productId").text(),
		},

		account: {
			username: $("#username").text(),
		},








		binhluana() {
			// && stars != ""
			// var stars = document.getElementById("starId").value;
			var noiDung = document.getElementById("noiDung").value;
			if (noiDung != "") {
				var rating = angular.copy(this);
				$http.post("/rest/binhluans", rating).then(resp => {
					let timerInterval
					Swal.fire({
						icon: 'success',
						title: 'Thành công',
						text: 'Cảm ơn góp ý của bạn!',
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
							location.href = "/product/binhluans/" + rating.product.productId;

						}
					})
				}).catch(error => {
					console.log(error)
				})

			}
			else {
				Swal.fire({
					icon: 'error',
					title: 'Thất bại',
					text: 'Góp ý thất bại ! , Vui lòng nhập đầy đủ thông tin',
				})
			}

		},





	}

	$scope.doitra = {
		createdAt: new Date(),

		email: "",
		moTaLoi: "",
		status: 0,
		description: "",
		phoneNumber: "",
		product: {
			productId: $("#productId").text(),
		},

		account: {
			username: $("#username").text(),
		},
		doitras() {
			// && stars != ""
			// var stars = document.getElementById("starId").value;
			var Email = document.getElementById("email").value;
			var moTaLoi = document.getElementById("moTaLoi").value;
			var description = document.getElementById("description").value;
			var phonenumber = document.getElementById("phoneNumber").value;
			// 
			if (phonenumber.length == 10 && Email != "" && moTaLoi != "" && description != "") {
				var doitra = angular.copy(this);
				$http.post("/rest/doitras", doitra).then(resp => {
					let timerInterval
					Swal.fire({
						icon: 'success',
						title: 'Thành công',
						text: 'Cảm ơn góp ý của bạn!',
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
							location.href = "/product/chinhsach";

						}
					})
				}).catch(error => {
					console.log(error)
				})

			}
			else {
				Swal.fire({
					icon: 'error',
					title: 'Thất bại',
					text: 'Góp ý thất bại ! , Vui lòng nhập đầy đủ thông tin',
				})
			}

		},





	}

})
// $(document).ready(function(){
// 	$('.post-slider').slick();
//   });
