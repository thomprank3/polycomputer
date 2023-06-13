package polycomputer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import polycomputer.dao.ProductDao;
import polycomputer.entity.Product;
import polycomputer.service.ProductService;


@Service
public class ProductServiceImpl implements ProductService {
@Autowired
ProductDao dao;
@Override
public List<Product> findAll() {
	
	return dao.findAll();
}
@Override
public Product findById(Integer id) {
	return dao.findById(id).get();
}
@Override
public Product create(Product Product) {
	return dao.save(Product);
}
@Override
public Product update(Product Product) {
	return dao.save(Product);


}
@Override
public void deleteById(Integer id) {
	 dao.deleteById(id);		
}
@Override
public List<Product> findByCategoryId(Integer cid) {
	return dao.findByCategoryId(cid);
}



}
