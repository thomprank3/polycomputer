package polycomputer.rest.controller;

import java.io.UnsupportedEncodingException;
import java.security.Principal;
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
import polycomputer.service.AccountService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/accounts")
public class AccountRestController {
	@Autowired
	AccountService accountService;
	@Autowired
	JavaMailSender mailsend;
	@Autowired
	@Lazy
	private BCryptPasswordEncoder pe;
	
	@GetMapping("{id}")
	public Account getOne(@PathVariable("username") String username) {
		return accountService.findById(username);
	}

	@GetMapping()
	public List<Account> getAccount(@RequestParam("admin") Optional<Boolean> admin) {
		if (admin.orElse(false)) {
			return accountService.getAdministratos();
		}
		return accountService.findAll();

	}
	@GetMapping("/index")
	public Account getOneUser(Principal principal) {
		return accountService.findById(principal.getName());
	}
	@PostMapping
	public Account create(@RequestBody Account account,HttpServletRequest request)
			throws UnsupportedEncodingException, MessagingException {
       
		
		account.setPassword(pe.encode(account.getPassword()));
		account.setActive(false);
	String randomcode = RandomString.make(64);
		account.setVerificationCode(randomcode);

		 accountService.create(account);
		 String siteURL = Util.getSiteURL(request);
		sendVerificationEmail(account, siteURL);
		return null;
	}

	public void sendVerificationEmail(Account account ,String siteURL) 
			throws UnsupportedEncodingException, MessagingException {
		String subject = "Làm phiền bạn xác nhận tài khoản";
		String senderName = "Poly's Computer";
		String mailContent = "<p> Kính gửi : " + account.getFullName() + "</p>";
		mailContent += "<p> Vui lòng nhấp chọn xác nhận để kích hoạt tài khoản </p>";
		
		String verify =  "http://localhost:8080/rest/accounts/verify?code=" + account.getVerificationCode();
		mailContent += "<h3> <a href=\"" +verify + "\" > XÁC NHẬN</a><h3>";
		mailContent += "<p> Cảm ơn bạn <br> Chúng tôi là Computer's Team </p>";
		
	MimeMessage message = mailsend.createMimeMessage();
	MimeMessageHelper hepl =  new MimeMessageHelper(message);
	hepl.setFrom("nantran481@gmail.com", senderName);
	hepl.setTo(account.getEmail());
	hepl.setSubject(subject);
	hepl.setText(mailContent,true);
	 mailsend.send(message);
	 
	 
	}

	@PutMapping("{username}")
	public Account update(@PathVariable("username") String username, @RequestBody Account account) {
		return accountService.update(account);
	}

			
	@DeleteMapping("{username}")
	public void delete(@PathVariable("username") String username) {
		accountService.deleteById(username);
	}
	
	@GetMapping("/hienThiSoNguoiDungMoiTrongThang")
	public Object hienThiSoNguoiDungMoiTrongThang() {
		return accountService.hienThiSoNguoiDungMoiTrongThang();
	}
	
	@GetMapping("/account-session")
	public ResponseEntity<Account> getAccountInSession(Authentication authentication){
		Account accountDTO = accountService.findById(authentication.getName());
		
		return new ResponseEntity<Account>(accountDTO, HttpStatus.OK);
}
	
	@GetMapping("/verify")
	public String verify(@Param("code") String code){
		 String verify =  "http://localhost:8080/security/login/form" ;
		  accountService.verify(code);
		return  "kích hoạt tài khoản thành công , bạn có thể đăng nhập :<a href=\"" +verify + "\" > Đăng nhập ngay</a>" ;
	 
//	 return "redirect:/security/login/form";
////		return "/security/login/form";

//		return  "<a href=\"" +verify + "\" > Đăng nhập ngay</a>";
}
}
