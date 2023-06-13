package polycomputer.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import polycomputer.dao.RatingDao;
import polycomputer.entity.Order;
import polycomputer.entity.OrderDetail;
import polycomputer.entity.Rating;
import polycomputer.service.RatingService;


@Service
public class RatingServiceImpl implements RatingService {
@Autowired
RatingDao dao;
@Override
public List<Rating> findAll() {
	
	return dao.findAll();
}
@Override
public Rating findById(Integer id) {
	return dao.findById(id).get();
}


@Override
public Object[] StarByProductId(Integer productId) {
	return dao.StarByProductId(productId);
}
@Override
public Rating create(JsonNode ratingData) {
	ObjectMapper mapper = new ObjectMapper();
	Rating rating = mapper.convertValue(ratingData, Rating.class);
	dao.save(rating);
	return rating;
	
	
}
@Override
public Rating update(Rating rating) {
	return dao.save(rating);


}
@Override
public void deleteById(Integer id) {
	 dao.deleteById(id);		
}
@Override
public List<Rating> findByProductId(Integer productId) {
	return dao.findByProductId(productId);
}


@Override
public List<Rating> selectBinhLuanTrongTuan() {
	return dao.selectBinhLuanTrongTuan();
}

@Override
public List<Rating> selectBinhLuanChuaReply() {
	return dao.selectBinhLuanChuaReply();
}
}
