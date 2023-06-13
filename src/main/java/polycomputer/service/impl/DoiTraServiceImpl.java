package polycomputer.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import polycomputer.dao.DoiTraDao;

import polycomputer.entity.DoiTra;
import polycomputer.entity.Order;
import polycomputer.entity.OrderDetail;
import polycomputer.service.DoiraService;


@Service
public class DoiTraServiceImpl implements DoiraService {
@Autowired
DoiTraDao dao;

@Override
public List<DoiTra> findAll() {
	
	return dao.findAll();
}

@Override
public DoiTra findById(Integer id) {
	return dao.findById(id).get();
}





@Override
public Page<DoiTra> findByUsername(String username, Pageable pageable) {
	return dao.findByUsername(username, pageable);
}

@Override
public DoiTra create(JsonNode doitraData) {
	ObjectMapper mapper = new ObjectMapper();
	DoiTra doitra = mapper.convertValue(doitraData, DoiTra.class);
	dao.save(doitra);
	return doitra;
	
	
}

@Override
public DoiTra update(DoiTra doitra) {
	return dao.save(doitra);


}

@Override
public void deleteById(Integer id) {
	 dao.deleteById(id);		
}

@Override
public List<DoiTra> selectYeuCauChuaXacNhan() {
	return dao.selectYeuCauChuaXacNhan();
}
@Override

public Object hienThiYeuCauDoiTra() {
	return dao.hienThiYeuCauDoiTra();
}




}
