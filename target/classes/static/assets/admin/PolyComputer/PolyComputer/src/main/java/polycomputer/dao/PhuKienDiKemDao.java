package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.PhuKienDiKem;

@Repository
public interface PhuKienDiKemDao extends JpaRepository<PhuKienDiKem, Integer>{

}
