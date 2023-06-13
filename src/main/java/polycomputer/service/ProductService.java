package polycomputer.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import polycomputer.entity.Product;

public interface ProductService {

	void deleteById(Integer productId);

	Product update(Product Product);

	Product create(Product Product);

	Product findById(Integer productId);

	List<Product> findAll();

	List<Product> findByCategoryId(Integer cid);

	
	 Page<Product> findByproductNameContaining(String name, Pageable pageable);
	 

	Page<Product> findAll(Pageable pageable);

	List<Product> top10new();

	List<Product> findProductDangGiamGia();


	List<Product> findByBrandId(Integer cid);


	List<Product> top10newforBrand(Integer cid);

	List<Object[]> top10HotOrder();

	List<Object[]> top3ProducthotoderofBrand(Integer cid);

	List<Product> top5khuyen();

	List<Product> findByRamId(Integer ram);

	List<Product> findByChipdohoaId(Integer chipdh);

	List<Product> findByCpuId(Integer cpu);

	List<Product> findByColorId(Integer col);

	List<Product> findByProductNameContaining(String name);

	List<Product> findByAll(Integer cid, Integer cat, Integer col, Integer cpu, Integer chipdh, Integer ram);

	List<Product> findByProductName(String name);

	List<Product> top8khuyen();

	Object hienThiSoLuongSanPham();

	void save(Product product);

	List<Product> findByBrandIdGiamGia(Integer cid);

	List<Product> giagiamdan();

	List<Product> giatangdan();

	List<Product> top20new();

	List<Product> tren40();

	List<Product> tu30den40();

	List<Product> tu20den30();

	List<Product> tu10den20();
	



}
