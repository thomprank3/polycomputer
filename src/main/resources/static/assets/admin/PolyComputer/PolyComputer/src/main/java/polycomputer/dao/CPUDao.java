package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import polycomputer.entity.CPU;

@Repository
public interface CPUDao extends JpaRepository<CPU, Integer>{

}
