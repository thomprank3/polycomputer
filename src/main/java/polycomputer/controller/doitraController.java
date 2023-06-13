package polycomputer.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import polycomputer.entity.Account;
import polycomputer.entity.DoiTra;
import polycomputer.entity.Order;
import polycomputer.service.AccountService;
import polycomputer.service.DoiraService;
import polycomputer.service.OrderService;
import polycomputer.service.StatusService;

@Controller
@RequestMapping("/doitra")
public class doitraController {
	
	@Autowired
DoiraService doiraService;
	@Autowired
	StatusService stt;
	@Autowired
	AccountService accountService;
	
	
	
	@RequestMapping("/list")
	public String store() {
		
		return "redirect:/doitra/list/page?p=0";
	}
	// tìm kiếm theo tên & phân trang
    @RequestMapping(value = "/list/page")
    public String list(ModelMap model,   HttpServletRequest request,
            @RequestParam("page") Optional<Integer> page, @RequestParam("size") Optional<Integer> size 
           ) {

        int currentPage = page.orElse(1);// trang hien tai
        int pageSize = size.orElse(5);// kich thuoc cua page
        Pageable pageable = PageRequest.of(currentPage - 1, pageSize);
        String username = request.getRemoteUser();
        Account item = accountService.findById(username);
		model.addAttribute("item", item);
		
        Page<DoiTra>  resultPage = doiraService.findByUsername(username, pageable); 
        
        int totalPages = resultPage.getTotalPages();
        if (totalPages > 0) {
            int start = Math.max(1, currentPage - 2);
            int end = Math.min(currentPage + 2, totalPages);
            if (totalPages > 5	) {
                if (end == totalPages)
                    start = end - 5;
                else if (start == 1)
                    end = start + 5;
            }
            List<Integer> pageNumbers = IntStream.rangeClosed(start, end).boxed().collect(Collectors.toList());
            model.addAttribute("pageNumbers", pageNumbers);

        }
     
		
        model.addAttribute("shop", "co");
        model.addAttribute("currentPage", currentPage);
        model.addAttribute("totalPages", totalPages);
        model.addAttribute("orderPage", resultPage);
		
		 model.addAttribute("pitems", resultPage); 
		
		 System.out.println(resultPage);
		 
		
        return "doitra/list";

    }
}
