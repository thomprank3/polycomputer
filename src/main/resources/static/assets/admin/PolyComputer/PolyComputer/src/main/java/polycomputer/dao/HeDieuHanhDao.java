package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.HeDieuHanh;

@Repository
public interface HeDieuHanhDao extends JpaRepository<HeDieuHanh, Integer>{

}
