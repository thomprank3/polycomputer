package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.LuuTru;

@Repository
public interface LuuTruDao extends JpaRepository<LuuTru, Integer>{

}
