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

import polycomputer.entity.Brand;
import polycomputer.entity.ChipDoHoa;
import polycomputer.service.ChipDoHoaService;



@CrossOrigin("*")
@RestController
@RequestMapping("/rest/chipdohoas")
public class ChipDoHoaRestController {
	@Autowired
	ChipDoHoaService ChipDoHoaService;
	
	@GetMapping()
	public List<ChipDoHoa> getAll() {
		return ChipDoHoaService.findAll();
	}
	
	@GetMapping("{id}")
	public ChipDoHoa getOne(@PathVariable("id") Integer id) {
		return ChipDoHoaService.findById(id);
	}
	
	@PostMapping()
	public ChipDoHoa create(@RequestBody ChipDoHoa ChipDoHoa) {
		return ChipDoHoaService.create(ChipDoHoa);
	}
	
	@PutMapping("{id}")
	public ChipDoHoa update(@PathVariable("id") Integer id,
			@RequestBody ChipDoHoa ChipDoHoa) {
		return ChipDoHoaService.update(ChipDoHoa);
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable("id") Integer id) {
		ChipDoHoaService.deleteById(id);
	}
	@GetMapping("find/{chipDoHoaName}")
	public  List<ChipDoHoa> getName(@PathVariable("chipDoHoaName") String chipDoHoaName) {
		
//		if(StringUtils.hasText(brandName) ) {
//			return brandService.findAll();
//		}
		return ChipDoHoaService.findByChipDoHoaNameContaining(chipDoHoaName);
	}
//	@GetMapping("/search")
//	public List<ChipDoHoa> search(ModelMap model ,
//			@RequestParam(name = "name", required = false)String name) {
//		List<ChipDoHoa> list = null;
//		if(StringUtils.hasText(name)) {
//			list = ChipDoHoaService.findByChipDoHoaNameContaining(name);
//			
//		}else {
//			list = ChipDoHoaService.findAll();
//			
//		}
//		return list;
//	}
}
