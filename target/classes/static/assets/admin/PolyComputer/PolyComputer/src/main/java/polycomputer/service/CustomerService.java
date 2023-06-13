package polycomputer.service;

import java.util.List;
import java.util.Optional;

import polycomputer.entity.Customer;

public interface CustomerService {

	List<Customer> getAdministratos();

	Customer findByUsername(String username);

	void save(Customer entity);

	Optional<Customer> findByIdedit(String username);

	void deleteById(String username);

	Customer update(Customer customer);

	Customer create(Customer customer);

	Customer findById(String username);

	List<Customer> findAll();

	

}
