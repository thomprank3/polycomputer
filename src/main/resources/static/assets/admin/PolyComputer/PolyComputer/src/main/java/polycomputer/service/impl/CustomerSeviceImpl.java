package polycomputer.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import polycomputer.dao.CustomerDao;
import polycomputer.entity.Customer;
import polycomputer.service.CustomerService;


@Service
public class CustomerSeviceImpl implements CustomerService {
@Autowired
CustomerDao dao;

	@Override
	public List<Customer> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Customer findById(String username) {
		// TODO Auto-generated method stub
		return dao.findById(username).get();
	}

	@Override
	public Customer create(Customer customer) {
		// TODO Auto-generated method stub
		return dao.save(customer);
	}

	@Override
	public Customer update(Customer customer) {
		// TODO Auto-generated method stub
		return dao.save(customer);
	}

	@Override
	public void deleteById(String username) {
dao.deleteById(username);		
	}

	

	@Override
	public Optional<Customer> findByIdedit(String username) {
		return dao.findById(username);
	}

	@Override
	public void save(Customer entity) {
dao.save(entity)	;	
	}
	/*
	 * @Override public Customer findByUsername(String username) { return
	 * dao.findByUsername(username); }
	 * 
	 * @Override public List<Customer> getAdministratos() { return
	 * dao.getAdministratos(); }
	 */

	@Override
	public List<Customer> getAdministratos() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Customer findByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}
	

}
