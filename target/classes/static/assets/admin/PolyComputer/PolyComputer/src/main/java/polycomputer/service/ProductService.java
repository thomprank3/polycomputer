package polycomputer.service;

import java.util.List;

import polycomputer.entity.Product;

public interface ProductService {

	void deleteById(Integer id);

	Product update(Product Product);

	Product create(Product Product);

	Product findById(Integer id);

	List<Product> findAll();

	List<Product> findByCategoryId(Integer cid);

}
