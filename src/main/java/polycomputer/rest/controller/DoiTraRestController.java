package polycomputer.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import polycomputer.entity.DoiTra;
import polycomputer.entity.Rating;
import polycomputer.service.DoiraService;





@CrossOrigin("*")
@RestController
@RequestMapping("/rest/doitras")
public class DoiTraRestController {
	@Autowired
	DoiraService doiTraService;
	
	@GetMapping()
	public List<DoiTra> getAll() {
		return doiTraService.findAll();
	}
	
	@GetMapping("{id}")
	public DoiTra getOne(@PathVariable("id") Integer id) {
		return doiTraService.findById(id);
	}
	
	@GetMapping("/selectYeuCauChuaXacNhan")
	public List<DoiTra> selectYeuCauChuaXacNhan() {
		return doiTraService.selectYeuCauChuaXacNhan();
	}
	@GetMapping("/hienThiYeuCauDoiTra")
	public Object hienThiYeuCauDoiTra() {
		return doiTraService.hienThiYeuCauDoiTra();
	}
	@PostMapping()
	public DoiTra create(@RequestBody JsonNode Ratingdata) {
		return doiTraService.create(Ratingdata);
	}
	
	@PutMapping("{id}")
	public DoiTra update(@PathVariable("id") Integer id,
			@RequestBody DoiTra Rating) {
		return doiTraService.update(Rating);
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable("id") Integer id) {
		doiTraService.deleteById(id);
	}
}
