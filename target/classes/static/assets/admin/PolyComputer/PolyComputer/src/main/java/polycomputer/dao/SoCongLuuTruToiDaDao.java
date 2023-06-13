package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.SoCongLuuTruToiDa;

@Repository
public interface SoCongLuuTruToiDaDao extends JpaRepository<SoCongLuuTruToiDa, Integer>{

}
