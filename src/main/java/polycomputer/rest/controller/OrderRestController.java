package polycomputer.rest.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import polycomputer.entity.Order;
import polycomputer.entity.OrderExcelExporter;
import polycomputer.service.OrderService;


@CrossOrigin("*")
@RestController
@RequestMapping("/rest/orders")
public class OrderRestController {
	@Autowired
	OrderService orderService;
	
	@GetMapping()
	public List<Order> getAll() {
		return orderService.findAll();
	}
	@GetMapping("/Byuser")
	public List<Order> getByUser(HttpServletRequest request) {
        String username = request.getRemoteUser();

		return orderService.finByUsername(username);
	}
	
//	@GetMapping("top10CustomerBuying")
//	public List<Order> getTop10CustomerBuying() {
//		return orderService.selectTop10CustomerBuying();
//	}
	
//	@GetMapping("/top10CustomerBoomHang")
//	public List<Order> getTop10CustomerBoomHang() {
//		return orderService.selectTop10CustomerBoomHang();
//	}
//	
////	@GetMapping("statisticalproduct")
////	public List<Order> statisticalProduct() {
////		return orderService.selectTheoProductBanRaCaiLoz();
////	}
//	
//	@GetMapping("/thanhcong")
//	public List<Order> getThanhCong() {
//		return orderService.selectDonHangThanhCong();
//	}
//	
//	@GetMapping("/chuaxacnhan")
//	public List<Order> getChuaXacNhan() {
//		return orderService.selectDonHangChuaXacNhan();
//	}
//	
//	@GetMapping("/doanhthutheonam")
//	public List<Order> getDoanhThuTheoNam() {
//		return orderService.selectDoanhThuTheoNam();
//	}
	
	@GetMapping("{id}")
	public Order getOne(@PathVariable("id") Long id) {
		return orderService.findById(id);
	}
	
	@PostMapping()
	public Order create(@RequestBody JsonNode orderData) {
		return orderService.create(orderData);
	}
	
	@PutMapping("{id}")
	public Order update(@PathVariable("id") Long id,
			@RequestBody Order order) {
		return orderService.update(order);
	}
	@GetMapping("{id1}")
	public Order updateStatus(@PathVariable("id1") Long id) {
	
		return orderService.updateStatus(id);
	}
	
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable("id") Long id) {
		orderService.deleteById(id);
	}
	
	@GetMapping("/selectTop10KhachHangMuaNhieuNhat")
	public List<Object[]> selectTop10KhachHangMuaNhieuNhat() {
		return orderService.selectTop10KhachHangMuaNhieuNhat();
	}
	
//	@GetMapping("/top10CustomerBoomHang")
//	public List<Order> getTop10CustomerBoomHang() {
//		return orderService.selectTop10CustomerBoomHang();
//	}
	
	@GetMapping("/selectDonHangDaXacNhan")
	public List<Order> selectDonHangDaXacNhan() {
		return orderService.selectDonHangDaXacNhan();
	}
	
	@GetMapping("/selectDonHangChoXacNhan")
	public List<Order> selectDonHangChoXacNhan() {
		return orderService.selectDonHangChoXacNhan();
	}
	
	@GetMapping("/selectDonHangDangGiaoHang")
	public List<Order> selectDonHangDangGiaoHang() {
		return orderService.selectDonHangDangGiaoHang();
	}
	
	@GetMapping("/selectDonHangDaNhanHang")
	public List<Order> selectDonHangDaNhanHang() {
		return orderService.selectDonHangDaNhanHang();
	}
	// to excel
		@GetMapping("/exportDaXacNhan")
		public void exportDaXacNhan(HttpServletResponse response) throws IOException {

			response.setContentType("application/octet-stream");
			String headerKey = "Content-Disposition";
			String headerValue = "attachement; filename=danhsach_donhang_daxacnhan.xlsx";

			response.setHeader(headerKey, headerValue);

			List<Order> lisOrders = orderService.selectDonHangDaXacNhan();

			OrderExcelExporter excelExporter = new OrderExcelExporter(lisOrders);
			excelExporter.export(response);
		}
		
		@GetMapping("/exportDaNhanHang")
		public void exportDaNhanHang(HttpServletResponse response) throws IOException {

			response.setContentType("application/octet-stream");
			String headerKey = "Content-Disposition";
			String headerValue = "attachement; filename=danhsach_donhang_danhanhang.xlsx";

			response.setHeader(headerKey, headerValue);

			List<Order> lisOrders = orderService.selectDonHangDaNhanHang();

			OrderExcelExporter excelExporter = new OrderExcelExporter(lisOrders);
			excelExporter.export(response);
		}
		
		@GetMapping("/exportDangGiaoHang")
		public void exportDangGiaoHang(HttpServletResponse response) throws IOException {

			response.setContentType("application/octet-stream");
			String headerKey = "Content-Disposition";
			String headerValue = "attachement; filename=danhsach_donhang_danggiaohang.xlsx";

			response.setHeader(headerKey, headerValue);

			List<Order> lisOrders = orderService.selectDonHangDangGiaoHang();

			OrderExcelExporter excelExporter = new OrderExcelExporter(lisOrders);
			excelExporter.export(response);
		}
		
		@GetMapping("/exportHuy")
		public void exportHuy(HttpServletResponse response) throws IOException {

			response.setContentType("application/octet-stream");
			String headerKey = "Content-Disposition";
			String headerValue = "attachement; filename=danhsach_donhang_dahuy.xlsx";

			response.setHeader(headerKey, headerValue);

			List<Order> lisOrders = orderService.selectDonHangDaHuy();

			OrderExcelExporter excelExporter = new OrderExcelExporter(lisOrders);
			excelExporter.export(response);
		}
		
		@GetMapping("/exportChoXacNhan")
		public void exportChoXacNhan(HttpServletResponse response) throws IOException {

			response.setContentType("application/octet-stream");
			String headerKey = "Content-Disposition";
			String headerValue = "attachement; filename=danhsach_donhang_choxacnhan.xlsx";

			response.setHeader(headerKey, headerValue);

			List<Order> lisOrders = orderService.selectDonHangChoXacNhan();

			OrderExcelExporter excelExporter = new OrderExcelExporter(lisOrders);
			excelExporter.export(response);
		}
	@GetMapping("/selectDonHangDaHuy")
	public List<Order> selectDonHangDaHuy() {
		return orderService.selectDonHangDaHuy();
	}
	@GetMapping("/selectTopKhachHangHuyDonNhieuNhat")
	public List<Object[]> selectTopKhachHangHuyDonNhieuNhat() {
		return orderService.selectTopKhachHangHuyDonNhieuNhat();
	}
	@GetMapping("/hienThiDoanhThuNam")
	public Object hienThiDoanhThuNam() {
		return orderService.hienThiDoanhThuNam();
	}
	
	@GetMapping("/hienThiSoDonHangChuaXacNhan")
	public Object hienThiSoDonHangChuaXacNhan() {
		return orderService.hienThiSoDonHangChuaXacNhan();
	}
	
	@GetMapping("/hienThiDoanhThuThang")
	public Object hienThiDoanhThuThang() {
		return orderService.hienThiDoanhThuThang();
	}
	
	@GetMapping("/hienThiSoDonHangThanhCong")
	public Object hienThiSoDonHangThanhCong() {
		return orderService.hienThiSoDonHangThanhCong();
	}
	
	@GetMapping("/layDoanhThuTheoTungThang")
	public List<Object[]> layDoanhThuTheoTungThang() {
		return orderService.layDoanhThuTheoTungThang();
	}
	
	@GetMapping("/layThangTrongNamHienTai")
	public List<Object[]> layThangTrongNamHienTai() {
		return orderService.layThangTrongNamHienTai();
	}
	
	
	
	
	
}