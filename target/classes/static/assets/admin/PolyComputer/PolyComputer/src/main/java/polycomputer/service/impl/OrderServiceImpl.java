package polycomputer.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import polycomputer.dao.BanPhimDao;
import polycomputer.dao.CategoryDao;
import polycomputer.dao.CustomerDao;
import polycomputer.dao.OrderDao;
import polycomputer.entity.BanPhim;
import polycomputer.entity.Category;
import polycomputer.entity.Customer;
import polycomputer.entity.Order;
import polycomputer.service.BanPhimService;
import polycomputer.service.CategoryService;
import polycomputer.service.CustomerService;
import polycomputer.service.OrderService;


@Service
public class OrderServiceImpl implements OrderService {
@Autowired
OrderDao dao;
@Override
public List<Order> findAll() {
	
	return dao.findAll();
}
@Override
public Order findById(Long id) {
	return dao.findById(id).get();
}
@Override
public Order create(Order order) {
	return dao.save(order);
}
@Override
public Order update(Order order) {
	return dao.save(order);


}
@Override
public void deleteById(Long id) {
	 dao.deleteById(id);		
}



}
