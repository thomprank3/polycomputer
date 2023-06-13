package polycomputer.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.fasterxml.jackson.databind.JsonNode;

import polycomputer.entity.DoiTra;
import polycomputer.entity.Order;

public interface DoiraService {

	void deleteById(Integer id);

	DoiTra update(DoiTra doitra);

	DoiTra create(JsonNode doitraData);

	DoiTra findById(Integer id);

	List<DoiTra> findAll();

	List<DoiTra> selectYeuCauChuaXacNhan();

	Object hienThiYeuCauDoiTra();



	Page<DoiTra> findByUsername(String username, Pageable pageable);
}
