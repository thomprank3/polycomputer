package polycomputer.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polycomputer.entity.OrderDetail;

@Repository
public interface OrderDetailDao extends JpaRepository<OrderDetail, Long>{

	@Query(value="SELECT o.product_id,p.product_name, sum(o.tong_tien_san_pham) as 'tongtien'  from order_details o\r\n"
			+ "inner join products p \r\n"
			+ "on p.product_id = o.product_id\r\n"
			+ "group by p.product_name,o.product_id order by sum(o.tong_tien_san_pham) DESC", nativeQuery = true)
	List<Object[]> thongKeDoanhThuTheoSanPham();

	@Query(value="select c.category_name, sum(o.so_luong) as 'soluongbanra', sum(o.tong_tien_san_pham) as 'tongtien'  from order_details o\r\n"
			+ "	  inner join products p  \r\n"
			+ "	  on p.product_id = o.product_id \r\n"
			+ "	  inner join categories c \r\n"
			+ "	  on c.category_id=p.category_id \r\n"
			+ "	  group by c.category_name order by sum(o.tong_tien_san_pham) DESC", nativeQuery = true)
	List<Object[]> thongKeDoanhThuTheoDanhMuc();
		
	@Query(value="select b.brand_name, sum(o.so_luong) as 'soluongbanra', sum(o.tong_tien_san_pham) as 'tongtien'  from order_details o\r\n"
			+ "inner join products p \r\n"
			+ "on p.product_id = o.product_id\r\n"
			+ "inner join brands b\r\n"
			+ "on b.brand_id=p.brand_id\r\n"
			+ "group by b.brand_name order by sum(o.tong_tien_san_pham) DESC", nativeQuery = true)
	List<Object[]> thongKeDoanhThuTheoThuongHieu();
	
	@Query(value="select TOP(10) o.product_id,p.product_name, sum(o.so_luong) as 'soluongban', sum(o.tong_tien_san_pham) as 'tongtien'  from order_details o\r\n"
			+ "inner join products p \r\n"
			+ "on p.product_id = o.product_id\r\n"
			+ "group by p.product_name, o.product_id order by sum(o.so_luong) DESC", nativeQuery = true)
	List<Object[]> thongKe10SanPhamBanChayNhat();
	
	@Query(value="select TOP(5) b.brand_id, b.brand_image,b.brand_name, sum(o.so_luong) as 'soluongban', sum(o.tong_tien_san_pham) as 'tongtien'  from order_details o\r\n"
			+ "inner join products p \r\n"
			+ "on p.product_id = o.product_id\r\n"
			+ "inner join brands b\r\n"
			+ "on b.brand_id=p.brand_id\r\n"
			+ "group by b.brand_id, b.brand_image,b.brand_name order by sum(o.so_luong) DESC", nativeQuery = true)
	List<Object[]> thongKe5ThuongHieuBanChayNhat();
	
	@Query(value="select TOP(5) c.category_id, c.category_name, sum(o.so_luong) as 'soluongban', sum(o.tong_tien_san_pham) as 'tongtien'  from order_details o\r\n"
			+ "inner join products p \r\n"
			+ "on p.product_id = o.product_id\r\n"
			+ "inner join categories c\r\n"
			+ "on c.category_id=p.category_id\r\n"
			+ "group by c.category_id, c.category_name order by sum(o.so_luong) DESC", nativeQuery = true)
	List<Object[]> thongKe5DanhMucBanChayNhat();
	
	@Query(value="SELECT DATEPART(month, od.created_at) as 'thang' , SUM(o.so_luong) as 'tongspbanra',SUM(o.so_luong * o.gia) as 'tongtienthudc' FROM order_details o\r\n"
			+ "	INNER JOIN orders od ON o.order_id =od.order_id\r\n"
			+ "	GROUP By DATEPART(month, od.created_at)", nativeQuery = true)
	List<Object[]> thongKeDoanhThuTheoThang();
	
	@Query(value="SELECT DATEPART(year, od.created_at) as 'nam' , SUM(o.so_luong) as 'tongspbanra',SUM(o.so_luong * o.gia) as 'tongtienthudc' FROM order_details o\r\n"
			+ "	INNER JOIN orders od ON o.order_id =od.order_id\r\n"
			+ "	GROUP By DATEPART(year, od.created_at)", nativeQuery = true)
	List<Object[]> thongKeDoanhThuTheoNam();
	
	@Query(value="SELECT DATEPART(quarter, od.created_at) as 'quy' , SUM(o.so_luong) as 'tongspbanra',SUM(o.so_luong * o.gia) as 'tongtienthudc' FROM order_details o\r\n"
			+ "	INNER JOIN orders od ON o.order_id =od.order_id\r\n"
			+ "	GROUP By DATEPART(quarter, od.created_at)", nativeQuery = true)
	List<Object[]> thongKeDoanhThuTheoQuy();
	
	@Query(value="SELECT TOP(10)  c.full_name, o.username, count(o.order_id) as 'So don hang', sum(o.tong_tien_thanh_toan) as 'tong tien'\r\n"
			+ "	FROM orders o \r\n"
			+ "	inner join accounts c \r\n"
			+ "	on c.username = o.username\r\n"
			+ "	group by c.full_name,o.username\r\n"
			+ "	order by count(o.order_id) DESC;", nativeQuery = true)
	List<Object[]> thongKe10KhachHangMuaHangNhieuNhat();

}
