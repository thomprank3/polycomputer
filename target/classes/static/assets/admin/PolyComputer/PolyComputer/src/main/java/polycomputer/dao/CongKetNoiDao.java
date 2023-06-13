package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import polycomputer.entity.CongKetNoi;

@Repository
public interface CongKetNoiDao extends JpaRepository<CongKetNoi, Integer>{

}
