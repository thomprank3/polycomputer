package polycomputer.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import polycomputer.entity.Order;
import polycomputer.entity.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {
	@Query("SELECT p FROM Product p WHERE p.category.categoryId=?1")
	List<Product> findByCategoryId(Integer cat);
	@Query("SELECT p FROM Product p WHERE p.color.colorId=?1")
	List<Product> findByColorId(Integer col);
	@Query("SELECT p FROM Product p WHERE p.cpu.cpuId=?1")
	List<Product> findByCpuId(Integer cpu);
	@Query("SELECT p FROM Product p WHERE p.chipDoHoa.chipDoHoaId=?1")
	List<Product> findByChipdohoaId(Integer chipdh);
	@Query("SELECT p FROM Product p WHERE p.ram.ramId=?1")
	List<Product> findByRamId(Integer ram);
	
	@Query("SELECT p FROM Product p WHERE p.brand.brandId=?1")
	List<Product> findByBrandId(Integer cid);
	@Query(value ="SELECT * FROM products p WHERE brand_id = ?1  and giam_gia > 0", nativeQuery = true)
	List<Product> findByBrandIdGiamGia(Integer cid);
	@Query(value ="SELECT *FROM products  WHERE gia < 10000000 or gia <= 20000000", nativeQuery = true)
	List<Product> findByGiatu10den20();

	@Query(value ="SELECT * FROM products  WHERE gia >= 20000000 or gia <= 30000000", nativeQuery = true)
	List<Product> findByGiatu20den30();

	@Query(value ="SELECT * FROM products  WHERE gia >= 30000000 or gia <= 40000000", nativeQuery = true)
	List<Product> findByGiatu30den40();

	@Query(value ="SELECT * FROM products  WHERE gia > 40000000", nativeQuery = true)
	List<Product> findByGiatren40();
	
	@Query(value = "select * from  products where  brand_id = ?1 and category_id = ?2 and color_id = ?3 and cpu_id = ?4 and chip_do_hoa_id = ?5 and ram_id = ?6", nativeQuery = true)
	List<Product> findByAll(Integer cid  ,Integer cat,Integer col,Integer cpu,Integer chipdh,Integer ram);
	
	@Query(value ="select  * from products order by gia desc", nativeQuery = true)
	List<Product> giagiamdan();
	@Query(value ="select  * from products order by gia asc", nativeQuery = true)
	List<Product> giatangdan();
	
	List<Product> findByProductName(String name);
	@Query(value ="select  * from products p  where p.giam_gia >0 order by created_at desc", nativeQuery = true)
	List<Product> findProductDangGiamGia();

	
//	Page<Product> findByProductNameContaining(String name,Pageable pageable);
	 Page<Product> findByProductNameContaining(String name, Pageable pageable); 	
		@Query(value = "select top 5 * from products where giam_gia > 0", nativeQuery = true)
		List<Product> top5khuyen();
		
		@Query(value = "select top 8 * from products where giam_gia > 0", nativeQuery = true)
		List<Product> top8khuyen();
	 
		@Query( value =" select count(product_id) as 'soluongsanpham' from products", nativeQuery = true)
		Object hienThiSoLuongSanPham();

	  @Query(value = "SELECT TOP(10)  p.product_name, o.product_id,p.anh_chinh,p.gia,p.giam_gia, COUNT(*) so_luong FROM order_details o\r\n"
	  		+ "	  		inner join products	p\r\n"
	  		+ "	  		ON o.product_id = p.product_id\r\n"
	  		+ "	  		group by p.product_name , o.product_id,p.anh_chinh,p.gia,p.giam_gia\r\n"
	  		+ "	  		order by so_luong DESC " , nativeQuery = true) 
	  List<Object[]>top10HotOrder();
	 
	
	@Query(value = "select top 5 * from products   order by created_at asc", nativeQuery = true)
	List<Product> top10new();
	
	@Query(value = "select top 5 * from products p where p.brand_id =?1  order by created_at desc", nativeQuery = true)
	List<Product> top10newforBrand(Integer cid);
	
	@Query(value = "select top 20 * from products   order by created_at asc", nativeQuery = true)
	List<Product> moinhat20();
	
	@Query(value = "SELECT TOP(3)  p.product_name, o.product_id,p.anh_chinh,p.gia,p.giam_gia, COUNT(*) so_luong FROM order_details o\r\n"
			+ "	  		 		inner join products	p\r\n"
			+ "	  		 		ON o.product_id = p.product_id\r\n"
			+ "					where p.brand_id = ?1\r\n"
			+ "	  	 		group by p.product_name , o.product_id,p.anh_chinh,p.gia,p.giam_gia\r\n"
			+ "	  	  		order by so_luong DESC ", nativeQuery = true)
	List<Object[]>top3ProducthotoderofBrand(Integer cid);
	
	
	List<Product> findByProductNameContaining(String name);
	

}
