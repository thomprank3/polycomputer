package polycomputer.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import polycomputer.DTO.AccountDto;
import polycomputer.entity.Account;
import polycomputer.entity.Brand;
import polycomputer.entity.Order;
import polycomputer.entity.Product;
import polycomputer.entity.Status;
import polycomputer.service.AccountService;
import polycomputer.service.UploadService;

@Controller
@RequestMapping("/account")
public class accountController {
	@Autowired
	AccountService accountService;
	@Autowired
	UploadService uploadService;
	@RequestMapping("")
	public String dangky() {
		return "/account/form";
	}
	@GetMapping("/details")
	public String detail(Model model, HttpServletRequest request) {
		String username = request.getRemoteUser();
		Account item = accountService.findById(username);
		model.addAttribute("item", item);
		
		return "account/detail";
	}
	
	@PostMapping("/saveOrUpdate")
	// các enotion để kiểm tra dữ liệu nếu có lỗi xảy rsa return về addoredit
	public String saveOrUpdate(  @ModelAttribute("item") Account account, BindingResult result
			, HttpServletRequest request
		) throws  IOException {
		String username = request.getRemoteUser();
		Account item = accountService.findById(username);
	account.setPassword(item.getPassword());
	account.setAvatar(item.getAvatar());
	account.setVerificationCode(item.getVerificationCode());
	account.setActive(item.getActive());
		accountService.save(account);
		
	
		return "redirect:/account/details";
		
	}
	

    
	
//	@PostMapping("/saveOrUpdateAnh")
//	// các enotion để kiểm tra dữ liệu nếu có lỗi xảy rsa return về addoredit
//	public String saveOrUpdate(  @ModelAttribute("item") AccountDto accDto, BindingResult result, HttpServletRequest request) throws  IOException {
//		
//	
//		String baseDir = "D:\\DOANTN1\\PolyComputer\\PolyComputer\\images\\";
//		
//		String avatar;
//		if(!accDto.getImageFile().isEmpty()) {
//			// lấy nội dung tên file gốc do người dùng upload lên sever
//			avatar = accDto.getImageFile().getOriginalFilename();
//			// sử lý nội udng của file filename upload vào thư mục đã định baseDir.
//			accDto.getImageFile().transferTo(new File(baseDir + avatar));
//			
//		}else {
//			//ngược lại lấy filename = imageEdit trên form
//			avatar = accDto.getAvatar();
//		}
//		
//
//		
//		
//	
//		Account entity = new Account();
//	
//		
//		
//		String username = request.getRemoteUser();
//
//		Account acc = accountService.findById(username);
//				
//				
//
//		
//		        entity.setAvatar(accDto.getAvatar());
//	
//				BeanUtils.copyProperties(accDto, entity);
//				
//				entity.setPassword(acc.getPassword());
//				entity.setVerificationCode(acc.getVerificationCode());
//				entity.setActive(acc.getActive());
//				entity.setAuthorities(acc.getAuthorities());
//				entity.setOrders(acc.getOrders());
//				entity.setRatingId(acc.getRatingId());
//		accountService.save(entity);
//		
//		
//		
//		return("redirect:/account/details");
//	}
	}
