package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.Pin;

@Repository
public interface PinDao extends JpaRepository<Pin, Integer>{

}
