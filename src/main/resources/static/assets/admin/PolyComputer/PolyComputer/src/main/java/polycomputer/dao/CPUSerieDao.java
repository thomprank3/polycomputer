package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import polycomputer.entity.CPUSerie;

@Repository
public interface CPUSerieDao extends JpaRepository<CPUSerie, Integer>{

}
