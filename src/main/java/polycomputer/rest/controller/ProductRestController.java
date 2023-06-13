package polycomputer.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import polycomputer.entity.Account;
import polycomputer.entity.Product;
import polycomputer.service.ProductService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/products")
public class ProductRestController {
	@Autowired
	ProductService productService;
	
	@GetMapping()
	public List<Product> getAll() {
		return productService.findAll();
	}
	
	@GetMapping("{productId}")
	public Product getOne(@PathVariable("productId") Integer productId) {
		return productService.findById(productId);
	}
	
	
	@GetMapping("/findProductDangGiamGia")
	public List<Product> findProductDangGiamGia() {
		return productService.findProductDangGiamGia();
	}
	@GetMapping("/hienThiSoLuongSanPham")
	public Object hienThiSoLuongSanPham() {
		return productService.hienThiSoLuongSanPham();
	}
	
	@GetMapping("find/{productName}")
	public  List<Product> getName(@PathVariable("productName") String productName) {
		return productService.findByProductNameContaining(productName);
	}
	@PostMapping()
	public Product create(@RequestBody Product product) {
		return productService.create(product);
	}
	
	@PutMapping("{productId}")
	public Product update(@PathVariable("productId") Integer productId,
			@RequestBody Product product) {
		return productService.update(product);
	}
	@PutMapping("updatesoluong/{productId}")
	public Product updatesoLuonG(@PathVariable("productId") Integer productId,
			
			Product product) {
		Product item = productService.findById(productId);
		product.setAnhChinh(item.getAnhChinh());
		product.setAnhPhu1(item.getAnhPhu1());
		product.setAnhPhu2(item.getAnhPhu2());
		product.setAnhPhu3(item.getAnhPhu3());
		product.setAnhPhu4(item.getAnhPhu4());
		product.setAvailable(item.getAvailable());
		product.setBanPhim(item.getBanPhim());
		product.setBaoHanh(item.getBaoHanh());
		product.setBrand(item.getBrand());
		product.setCategory(item.getCategory());
		product.setChipDoHoa(item.getChipDoHoa());
		product.setColor(item.getColor());
		product.setCongKetNoi(item.getCongKetNoi());
		product.setCongXuatHinh(item.getCongXuatHinh());
		product.setCpu(item.getCpu());
		product.setCpuSerie(item.getCpuSerie());
		product.setDescription(item.getDescription());
		product.setGia(item.getGia());
		product.setGiamGia(item.getGiamGia());
		product.setGift(item.getGift());
		product.setHeDieuHanh(item.getHeDieuHanh());
		product.setKhoiLuong(item.getKhoiLuong());
		product.setKichThuoc(item.getKichThuoc());
		product.setLuuTru(item.getLuuTru());
		product.setManHinh(item.getManHinh());
		product.setPhuKienDiKem(item.getPhuKienDiKem());
		product.setPin(item.getPin());
		product.setProductName(item.getProductName());
		product.setRam(item.getRam());
		product.setRatings(item.getRatings());
		product.setSoCongLuuTruToiDa(item.getSoCongLuuTruToiDa());
		product.setSoLuong(item.getSoLuong() - 1);
		product.setOrderDetails(item.getOrderDetails());
		
		
		
		
		productService.save(product);
		
		return productService.update(product);
	}
	@DeleteMapping("{productId}")
	public void delete(@PathVariable("productId") Integer productId) {
		productService.deleteById(productId);
	}
}
