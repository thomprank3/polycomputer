app.controller("main-content-ctrl", function ($scope, $http, $location) {
  $scope.hienThiDoanhThuNam;
  $scope.hienThiSoDonHangChuaXacNhan;
  $scope.hienThiDoanhThuThang;
  $scope.hienThiSoDonHangThanhCong;
  $scope.hienThiSoLuongSanPham;
  $scope.hienThiSoNguoiDungMoiTrongThang;
  $scope.hienThiSoLuongThuongHieu;
  $scope.items = [];
  $scope.hienThiYeuCauDoiTra;
  var doanhthutest = [];
  $scope.initialize = function () {
    $http.get("/rest/orders/hienThiDoanhThuNam").then(resp => {
      $scope.hienThiDoanhThuNam = resp.data;
    });
    $http.get("/rest/orders/hienThiSoDonHangChuaXacNhan").then(resp => {
      $scope.hienThiSoDonHangChuaXacNhan = resp.data;
    });
    $http.get("/rest/orders/hienThiDoanhThuThang").then(resp => {
      $scope.hienThiDoanhThuThang = resp.data;
    });
    $http.get("/rest/orders/hienThiSoDonHangThanhCong").then(resp => {
      $scope.hienThiSoDonHangThanhCong = resp.data;
    });
    $http.get("/rest/orders/layDoanhThuTheoTungThang").then(resp => {
      doanhthutest = resp.data;
    });
    $http.get("/rest/binhluans/selectBinhLuanTrongTuan").then(resp => {
      $scope.items = resp.data;
    });
    $http.get("/rest/doitras/hienThiYeuCauDoiTra").then(resp => {
      $scope.hienThiYeuCauDoiTra = resp.data;
    });
    $http.get("/rest/products/hienThiSoLuongSanPham").then(resp => {
      $scope.hienThiSoLuongSanPham = resp.data;
    });
    $http.get("/rest/accounts/hienThiSoNguoiDungMoiTrongThang").then(resp => {
      $scope.hienThiSoNguoiDungMoiTrongThang = resp.data;
    });
    $http.get("/rest/brands/hienThiSoLuongThuongHieu").then(resp => {
      $scope.hienThiSoLuongThuongHieu = resp.data;
    });

  }

  //khoi dau
  $scope.initialize();

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
  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#858796';

  function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }


  // Pie Chart Example
  var ctx2 = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ["Gaming", "Công Sở", "Khác"],
      datasets: [{
        data: [45, 40, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });


  // Area Chart Example
  var ctx1 = document.getElementById("myAreaChart");
  var myLineChart = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Revenues",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [221500000, 267500000, 351500000, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      }],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value) + ' VND';
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + ' VND';
          }
        }
      }
    }
  });
  var datanew = [1, 2, 3, 4, 5, 6]
  var dataLineChart = [];
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data.push(datanew);
  });
  myLineChart.update();

});