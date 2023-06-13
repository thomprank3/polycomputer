package polycomputer.service;

import java.util.List;

import polycomputer.entity.Order;

public interface OrderService {

	void deleteById(Long id);

	Order update(Order order);

	Order create(Order order);

	Order findById(Long id);

	List<Order> findAll();

}
