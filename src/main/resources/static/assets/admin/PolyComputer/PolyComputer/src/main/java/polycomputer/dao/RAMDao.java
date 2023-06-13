package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.RAM;

@Repository
public interface RAMDao extends JpaRepository<RAM, Integer>{

}
