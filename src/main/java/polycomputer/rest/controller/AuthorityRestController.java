package polycomputer.rest.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import polycomputer.entity.Authority;


@CrossOrigin("*")
	@RestController
	@RequestMapping("/rest/authorities")
	public class AuthorityRestController {
		@Autowired
		polycomputer.service.AuthorityService authorityService;
		
		@GetMapping
		public List<Authority> findAll(@RequestParam("admin") Optional<Boolean> admin){
			if(admin.orElse(false)) {
				return authorityService.findAuthoritiesOfAdministrators(); //cac quyen duoc cap cua admin
			}
			return authorityService.findAll();
		}
		@PostMapping
		public Authority post(@RequestBody Authority auth) {
			return authorityService.create(auth);
		}
		@DeleteMapping("{id}")
		public void delete(@PathVariable("id") Integer id) {
			authorityService.delete(id);
		}

}

