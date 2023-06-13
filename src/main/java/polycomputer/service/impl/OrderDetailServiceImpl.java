package polycomputer.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import polycomputer.dao.BanPhimDao;
import polycomputer.dao.CategoryDao;
import polycomputer.dao.AccountDao;
import polycomputer.dao.OrderDao;
import polycomputer.dao.OrderDetailDao;
import polycomputer.entity.BanPhim;
import polycomputer.entity.Category;
import polycomputer.entity.Account;
import polycomputer.entity.Order;
import polycomputer.entity.OrderDetail;
import polycomputer.service.BanPhimService;
import polycomputer.service.CategoryService;
import polycomputer.service.AccountService;
import polycomputer.service.OrderDetailService;


@Service
public class OrderDetailServiceImpl implements OrderDetailService {
@Autowired
OrderDetailDao dao;
@Override
public List<OrderDetail> findAll() {
	
	return dao.findAll();
}
@Override
public OrderDetail findById(Long id) {
	return dao.findById(id).get();
}
@Override
public OrderDetail create(OrderDetail orderDetail) {
	return dao.save(orderDetail);
}
@Override
public OrderDetail update(OrderDetail orderDetail) {
	return dao.save(orderDetail);


}
@Override
public void deleteById(Long id) {
	 dao.deleteById(id);		
}

@Override
public List<Object[]> thongKeDoanhThuTheoSanPham() {
	return dao.thongKeDoanhThuTheoSanPham();
}
@Override
public List<Object[]> thongKeDoanhThuTheoDanhMuc() {
	return dao.thongKeDoanhThuTheoDanhMuc();
}
@Override
public List<Object[]> thongKeDoanhThuTheoThuongHieu() {
	return dao.thongKeDoanhThuTheoThuongHieu();
}
@Override
public List<Object[]> thongKe10SanPhamBanChayNhat() {
	return dao.thongKe10SanPhamBanChayNhat();
}
@Override
public List<Object[]> thongKe5ThuongHieuBanChayNhat() {
	return dao.thongKe5ThuongHieuBanChayNhat();
}
@Override
public List<Object[]> thongKe10KhachHangMuaHangNhieuNhat() {
	return dao.thongKe10KhachHangMuaHangNhieuNhat();
}
@Override
public List<Object[]> thongKeDoanhThuTheoQuy() {
	return dao.thongKeDoanhThuTheoQuy();
}
@Override
public List<Object[]> thongKeDoanhThuTheoNam() {
	return dao.thongKeDoanhThuTheoNam();
}
@Override
public List<Object[]> thongKeDoanhThuTheoThang() {
	return dao.thongKeDoanhThuTheoThang();
}
//@Override
//public List<OrderDetail> findTop10BestSellingProduct() {
//	// TODO Auto-generated method stub
//	return null;
//}
@Override
public List<Object[]> thongKe5DanhMucBanChayNhat() {
	return dao.thongKe5DanhMucBanChayNhat();
}

}
