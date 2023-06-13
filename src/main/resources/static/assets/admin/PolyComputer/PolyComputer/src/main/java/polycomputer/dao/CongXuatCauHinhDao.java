package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import polycomputer.entity.CongXuatCauHinh;

@Repository
public interface CongXuatCauHinhDao extends JpaRepository<CongXuatCauHinh, Integer>{

}
