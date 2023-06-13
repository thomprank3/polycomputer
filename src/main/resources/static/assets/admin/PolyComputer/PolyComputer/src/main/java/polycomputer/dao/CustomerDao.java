package polycomputer.dao;

/*import java.util.List;
*/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.Customer;

@Repository
public interface CustomerDao extends JpaRepository<Customer, String>{
	/*
	 * Customer findByUsername(String username);
	 * 
	 * @Query("SELECT DISTINCT ar.account FROM Authority ar WHERE ar.role.id IN ('DIRE','STAF','CUST')"
	 * ) List<Customer> getAdministratos();
	 */
}
