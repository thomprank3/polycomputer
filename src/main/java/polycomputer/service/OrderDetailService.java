package polycomputer.service;

import java.util.List;

import polycomputer.entity.OrderDetail;

public interface OrderDetailService {

	void deleteById(Long id);

	OrderDetail update(OrderDetail orderDetail);

	OrderDetail create(OrderDetail orderDetail);

	OrderDetail findById(Long id);

	List<OrderDetail> findAll();

List<Object[]> thongKeDoanhThuTheoSanPham();
	
	List<Object[]> thongKeDoanhThuTheoDanhMuc();
	
	List<Object[]> thongKeDoanhThuTheoThuongHieu();
	
	List<Object[]> thongKe10SanPhamBanChayNhat();
	
	List<Object[]> thongKe5ThuongHieuBanChayNhat();
	
	List<Object[]> thongKe10KhachHangMuaHangNhieuNhat();
	
	List<Object[]> thongKeDoanhThuTheoQuy();
	
	List<Object[]> thongKeDoanhThuTheoNam();
	
	List<Object[]> thongKeDoanhThuTheoThang();
	
	List<Object[]> thongKe5DanhMucBanChayNhat();



}
