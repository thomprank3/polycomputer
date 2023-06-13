package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.Role;

@Repository
public interface RoleDao extends JpaRepository<Role, Integer>{

}
