package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.ManHinh;

@Repository
public interface ManHinhDao extends JpaRepository<ManHinh, Integer>{

}
