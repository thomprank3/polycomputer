package polycomputer.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import polycomputer.entity.Rating;

@Repository
public interface RatingDao extends JpaRepository<Rating, Integer>{
	  @Query(value = "SELECT * FROM ratings where product_id   =?1", nativeQuery = true) 
	  List<Rating>findByProductId(Integer productId);
	  
	  @Query( value =" select sum(star_Id)/(count(rating_id)) , count(rating_id) as 'tong'   from ratings where product_id = ?1", nativeQuery = true)
	  Object[] StarByProductId(Integer productId);
	  
	  @Query( value =" select * from ratings where ((created_at <= GETDATE()) AND (created_at >= GETDATE() - 7))", nativeQuery = true)
	  List<Rating> selectBinhLuanTrongTuan();
	  
	  @Query( value ="select * from ratings where (reply IS NULL OR reply = '')", nativeQuery = true)
	  List<Rating> selectBinhLuanChuaReply();
}