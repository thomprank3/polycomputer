package polycomputer.service;

import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

import polycomputer.entity.Order;
import polycomputer.entity.Rating;

public interface RatingService {

	void deleteById(Integer id);

	Rating update(Rating rating);

	

	Rating findById(Integer id);

	List<Rating> findAll();

	List<Rating> findByProductId(Integer productId);

	Rating create(JsonNode ratingData);


	Object[] StarByProductId(Integer productId);
	List<Rating> selectBinhLuanTrongTuan();

	List<Rating> selectBinhLuanChuaReply();

}
