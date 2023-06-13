package polycomputer.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import polycomputer.entity.Brand;
import polycomputer.entity.Category;
import polycomputer.entity.Images;
import polycomputer.entity.Product;
import polycomputer.entity.Rating;
import polycomputer.service.BrandService;
import polycomputer.service.CategoryService;
import polycomputer.service.ImageService;
import polycomputer.service.ProductService;
import polycomputer.service.RatingService;

@Controller
public class productscontroller {
	@Autowired
	ProductService productService;
	@Autowired
	BrandService brandService;
	@Autowired
	CategoryService categoryService;
	@Autowired
	RatingService rai;
	
	@RequestMapping("layout/gioithieu")
	public String gioithieu() {
		
		
		return "/layout/gioithieu";
	}

	@RequestMapping("product/brand")
	public String listbrand(Model model, @RequestParam("cid") Optional<Integer> cid) {
		if (cid.isPresent()) {
			List<Object[]> top3banchaycuahang = productService.top3ProducthotoderofBrand(cid.get());
			  model.addAttribute("top3banchaycuahang", top3banchaycuahang);
			List<Product> list = productService.findByBrandId(cid.get());
			model.addAttribute("items1", list);
//			List<Product> top3noibat = productService.findAll();
//			model.addAttribute("items1", top3noibat);
			List<Product> top4moinhat = productService.top10newforBrand(cid.get());
			model.addAttribute("items4new", top4moinhat);
		

		}

		return "brand/sanphamtheohang";
	}
	@RequestMapping("product/sosanh/sosanh1")
	public String like(ModelMap model) {
		
		List<Product> list = productService.top8khuyen();
		model.addAttribute("all",list);
		return "/product/sosanh1";
	}
	@RequestMapping("product/sosanh/sosanh2")
	public String likeSS() {
		
		
		return "/product/sosanh2";
	}
	@RequestMapping("product/khuyenmai")
	public String khuyenmai(ModelMap model) {
		List<Product> list1 = productService.findByBrandIdGiamGia(1);
		List<Product> list2 = productService.findByBrandIdGiamGia(2);
		List<Product> list3 = productService.findByBrandIdGiamGia(3);
		List<Product> list4 = productService.findByBrandIdGiamGia(4);
		List<Product> list5 = productService.findByBrandIdGiamGia(5);
		List<Product> list6 = productService.findByBrandIdGiamGia(6);
		List<Product> list7 = productService.findByBrandIdGiamGia(7);
		List<Product> list8 = productService.findByBrandIdGiamGia(8);
		List<Product> list10 = productService.findByBrandIdGiamGia(10);
		List<Product> list1006 = productService.findByBrandIdGiamGia(1006);
		model.addAttribute("list1",list1);
		model.addAttribute("list2",list2);
		model.addAttribute("list3",list3);
		model.addAttribute("list4",list4);
		model.addAttribute("list5",list5);
		model.addAttribute("list6",list6);
		model.addAttribute("list7",list7);
		model.addAttribute("list8",list8);
		model.addAttribute("list10",list10);
		model.addAttribute("list1006",list1006);
		return "/product/khuyenmai";
	}
	
	@RequestMapping("product/trangchu")
	public String list(Model model) {

		List<Brand> brand = brandService.findAll();
		model.addAttribute("brand", brand);

		  List<Object[]> top10banchay = productService.top10HotOrder();
		  model.addAttribute("top10banchay", top10banchay);
		  List<Product> top5khuyen = productService.top5khuyen();

			model.addAttribute("top5k", top5khuyen);
		List<Product> top10new = productService.top10new();

		model.addAttribute("top10moinhat", top10new);

		return "product/trangchu";
	}

	@RequestMapping("/product/details/{productId}")
	public String detail(Model model, @PathVariable("productId") Integer productId) {
		Product item1 = productService.findById(productId);
		model.addAttribute("item", item1);
		Object[] ra = rai.StarByProductId(productId);
		 model.addAttribute("star", ra);
		List<Rating> item = rai.findByProductId(productId);
		model.addAttribute("item1", item);
		List<Brand> brand = brandService.findAll();
		model.addAttribute("brand", brand);
		return "product/details";
	}

	
	
	


@RequestMapping("/product/binhluans/{productId}")
public String binhluans(Model model, @PathVariable("productId") Integer productId) {
	Product item1 = productService.findById(productId);
	model.addAttribute("item", item1);

	 Object[] ra = rai.StarByProductId(productId);
	 model.addAttribute("star", ra);
	List<Rating> item = rai.findByProductId(productId);
	model.addAttribute("item1", item);
	List<Brand> brand = brandService.findAll();
	model.addAttribute("brand", brand);
	return "product/binhluans";
}

@RequestMapping("/product/doitras/{productId}")
public String doitras(Model model, @PathVariable("productId") Integer productId) {
	Product item1 = productService.findById(productId);
	model.addAttribute("item", item1);

	 
	return "product/doitras";
}
@RequestMapping("/product/chinhsach")
public String chinhsach() {
	

	 
	return "product/chinhsach";
}
}


