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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import polycomputer.entity.BanPhim;
import polycomputer.entity.SoCongLuuTruToiDa;
import polycomputer.service.BanPhimService;



@CrossOrigin("*")
@RestController
@RequestMapping("/rest/banphims")
public class BanPhimRestController {
	@Autowired
	BanPhimService banPhimService;
	
	@GetMapping()
	public List<BanPhim> getAll() {
		return banPhimService.findAll();
	}
	
	@GetMapping("{id}")
	public BanPhim getOne(@PathVariable("id") Integer id) {
		return banPhimService.findById(id);
	}
	
	@PostMapping()
	public BanPhim create(@RequestBody BanPhim banphim) {
		return banPhimService.create(banphim);
	}
	
	@PutMapping("{id}")
	public BanPhim update(@PathVariable("id") Integer id,
			@RequestBody BanPhim banphim) {
		return banPhimService.update(banphim);
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable("id") Integer id) {
		banPhimService.deleteById(id);
	}
	
//	@GetMapping("/search")
//	public List<BanPhim> search(ModelMap model ,
//			@RequestParam(name = "name", required = false)String name) {
//		List<BanPhim> list = null;
//		if(StringUtils.hasText(name)) {
//			list = banPhimService.findByBanPhimNameContaining(name);
//			
//		}else {
//			list = banPhimService.findAll();
//			
//		}
//		return list;
//	}
	@GetMapping("find/{banPhimName}")
	public  List<BanPhim> getName(@PathVariable("banPhimName") String banPhimName) {
		return banPhimService.findByBanPhimNameContaining(banPhimName);
	}
}
