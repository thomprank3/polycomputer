package polycomputer.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polycomputer.entity.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer>{
	@Query("SELECT p FROM Product p WHERE p.category.categoryId=?1")
	List<Product> findByCategoryId(Integer cid);
}
