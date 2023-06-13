package polycomputer.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import polycomputer.dao.OrderDetailDao;
import polycomputer.entity.Order;
import polycomputer.entity.OrderDetail;


@CrossOrigin("*")
@RestController
@RequestMapping("/rest/orderdetails")
public class OrderDetailRestController {
	@Autowired
	OrderDetailDao orderDetailService;
	
	@GetMapping()
	public List<OrderDetail> getAll() {
		return orderDetailService.findAll();
	}
	
	@GetMapping("/thongKe10SanPhamBanChayNhat")
	public List<Object[]> thongKe10SanPhamBanChayNhat() {
		return orderDetailService.thongKe10SanPhamBanChayNhat();
	}
	
	@GetMapping("/thongKe5ThuongHieuBanChayNhat")
	public List<Object[]> thongKe5ThuongHieuBanChayNhat() {
		return orderDetailService.thongKe5ThuongHieuBanChayNhat();
	}
	
	@GetMapping("/thongKe5DanhMucBanChayNhat")
	public List<Object[]> thongKe5DanhMucBanChayNhat() {
		return orderDetailService.thongKe5DanhMucBanChayNhat();
	}
	
	@GetMapping("/thongKeDoanhThuTheoThuongHieu")
	public List<Object[]> thongKeDoanhThuTheoThuongHieu() {
		return orderDetailService.thongKeDoanhThuTheoThuongHieu();
	}
	
	@GetMapping("/thongKeDoanhThuTheoDanhMuc")
	public List<Object[]> thongKeDoanhThuTheoDanhMuc() {
		return orderDetailService.thongKeDoanhThuTheoDanhMuc();
	}
	
	@GetMapping("/thongKeDoanhThuTheoSanPham")
	public List<Object[]> thongKeDoanhThuTheoSanPham() {
		return orderDetailService.thongKeDoanhThuTheoSanPham();
	}
	
	@GetMapping("/thongKeDoanhThuTheoThang")
	public List<Object[]> thongKeDoanhThuTheoThang() {
		return orderDetailService.thongKeDoanhThuTheoThang();
	}
	
	@GetMapping("/thongKeDoanhThuTheoNam")
	public List<Object[]> thongKeDoanhThuTheoNam() {
		return orderDetailService.thongKeDoanhThuTheoNam();
	}
	
	@GetMapping("/thongKeDoanhThuTheoQuy")
	public List<Object[]> thongKeDoanhThuTheoQuy() {
		return orderDetailService.thongKeDoanhThuTheoQuy();
	}
	
	@GetMapping("/thongKe10KhachHangMuaHangNhieuNhat")
	public List<Object[]> thongKe10KhachHangMuaHangNhieuNhat() {
		return orderDetailService.thongKe10KhachHangMuaHangNhieuNhat();
	}

//	
//	@GetMapping("{id}")
//	public OrderDetail getOne(@PathVariable("id") Long id) {
//		return orderDetailService.findById(id);
//	}
//	
//	@PostMapping()
//	public OrderDetail create(@RequestBody JsonNode orderData) {
//		return orderDetailService.create(orderData);
//	}
//	
//	@PutMapping("{id}")
//	public OrderDetail update(@PathVariable("id") Long id,
//			@RequestBody Order order) {
//		return orderDetailService.update(order);
//	}
//	
//	@DeleteMapping("{id}")
//	public void delete(@PathVariable("id") Long id) {
//		orderDetailService.deleteById(id);
//	}
}