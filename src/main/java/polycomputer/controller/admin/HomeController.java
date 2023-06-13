package polycomputer.controller.admin;

import java.security.Principal;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import polycomputer.entity.Account;
import polycomputer.entity.Product;
import polycomputer.service.AccountService;

@Controller
public class HomeController {
	@Autowired
	AccountService acc;
	@Autowired
	JavaMailSender javaMailSender;
	@RequestMapping({"/","/home/index"})
	public String home() {
		return "redirect:/product/trangchu";
	}
	
	
	@RequestMapping({"/admin","/admin/home/index"})
	public String admin(Model model, Principal principal,HttpServletRequest request) {
//		model.addAttribute("account", new Account());
//		Account account = acc.findById(principal.getName());
//		model.addAttribute("account", account);
//		System.out.println(account.getFullName());
		String username = request.getRemoteUser();
		Account account = acc.findById(username);
		model.addAttribute("acc", account);
		System.out.println(account.getFullName());
		return "redirect:/assets/admin/index.html";
	}
	@RequestMapping("/send")

	public String sendMail(ModelMap model , @RequestParam("to") String to, @RequestParam("subject") String subject,
			@RequestParam("content") String content) {
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo(to);
		msg.setSubject(subject);
		msg.setText(content);
		javaMailSender.send(msg);
		return "redirect:/product/trangchu";	
	}
	@RequestMapping("/admin1")
	public String doitras(Model model, Principal principal,HttpServletRequest request) {
		String username = request.getRemoteUser();
		Account account = acc.findById(username);
		model.addAttribute("acc", account);
		System.out.println(account.getFullName());
		return "/assets/admin/index";
	
}
}