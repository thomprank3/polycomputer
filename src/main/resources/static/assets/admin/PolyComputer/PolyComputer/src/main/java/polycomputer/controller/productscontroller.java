package polycomputer.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import polycomputer.entity.Product;
import polycomputer.service.ProductService;
@Controller
public class productscontroller {
	@Autowired
	ProductService productService;
	@RequestMapping("/product/list")
public String list(Model model,@RequestParam("cid")Optional<Integer> cid) {
		if(cid.isPresent()) {
			
			List<Product> list = productService.findByCategoryId(cid.get());
			model.addAttribute("items1",list);
			
		}
		else {
			List<Product> list1 = productService.findAll();
			model.addAttribute("allproducts",list1);
		
			
			
		}
		
	return "product/list";
}
	@RequestMapping("/product/details/{id}")
	public String detail(Model model, @PathVariable("productid") Integer id) {
			Product item = productService.findById(id);
			model.addAttribute("item",item);
		return "product/details";
	} 
}
