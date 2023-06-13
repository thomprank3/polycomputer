package polycomputer.dao;

import java.util.List;
import java.util.Optional;

/*import java.util.List;
*/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polycomputer.entity.Account;

@Repository
public interface AccountDao extends JpaRepository<Account, String>{


 
//	  @Query("SELECT DISTINCT ar.account FROM Authority ar WHERE ar.role.id IN ('DIRE','STAF','CUST')"
//	 ) List<Customer> getAdministratos();
//	 
//	@Query("SELECT DISTINCT ar.account FROM Authority ar WHERE ar.role.roleId IN ('DIRE','STAFF','USER')")
	@Query("SELECT a FROM Account a ")

	List<Account> getAdministrators(); // đi lấy những account có vai trò nằm trong giám đốc và nhân viên

	@Query("SELECT a FROM Account a WHERE a.email = ?1")
	Optional<Account> findByEmail(String email);
	
	@Query(value="UPDATE Accounts set active = 1 where username = ?1", nativeQuery = true)
	
	public void active(String username);
	
	@Query("SELECT a FROM Account a WHERE a.verificationCode = ?1")
	public Account findByVerificationCode(String code);
	@Query( value =" select count(username) from accounts where ((created_at <= GETDATE()) AND (created_at >= GETDATE() - 30))", nativeQuery = true)
	Object hienThiSoNguoiDungMoiTrongThang();
}
