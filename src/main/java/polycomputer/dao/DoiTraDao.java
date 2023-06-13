package polycomputer.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import polycomputer.entity.DoiTra;
import polycomputer.entity.Order;

@Repository
public interface DoiTraDao extends JpaRepository<DoiTra, Integer>{
	@Query(value="SELECT * FROM doi_tras WHERE status = N'Chưa xác nhận'", nativeQuery = true)
	List<DoiTra> selectYeuCauChuaXacNhan();
	@Query(value="select count(doi_tra_id) as 'tongyeucau' from doi_tras where status = N'Chưa xác nhận'", nativeQuery = true)
	Object hienThiYeuCauDoiTra();
	
	@Query("SELECT o FROM DoiTra o WHERE o.account.username=?1 order by created_at desc")
	 Page<DoiTra> findByUsername(String username, Pageable pageable);
}

	


