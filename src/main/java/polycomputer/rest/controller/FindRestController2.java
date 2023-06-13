package polycomputer.rest.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
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

import net.bytebuddy.utility.RandomString;
import polycomputer.Util;
import polycomputer.entity.Account;
import polycomputer.entity.Brand;
import polycomputer.entity.Product;
import polycomputer.service.AccountService;
import polycomputer.service.BrandService;
import polycomputer.service.ProductService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/finds")
public class FindRestController2 {
	@Autowired
	ProductService PService;
	@Autowired
	BrandService BService;


	@GetMapping("findproducts/{productName}")
	public  List<Product> getproductName(@PathVariable("productName") String productName) {
		return PService.findByProductName(productName);
	}
	@GetMapping("findbrands/{brandName}")
	public  List<Brand> getbrandName(@PathVariable("brandName") String brandName) {
		return BService.findByBrandNameContaining(brandName);
	}
}
