package polycomputer.DTO;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import polycomputer.entity.Authority;
import polycomputer.entity.Order;
import polycomputer.entity.Rating;
@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class AccountDto implements Serializable{
	@Id
	
	String username;
	
	String password;	
	String fullName;	
	String email;	
	
	String avatar;
	private MultipartFile imageFile;
	String address;
	String phoneNumber;
	Boolean active; //nick da kich hoat chua
	String verificationCode;	
	@Temporal(TemporalType.DATE)
	@Column(name = "created_At")
	Date createdAt = new Date();	
	@Temporal(TemporalType.DATE)
	@Column(name = "updated_At")
	Date updatedAt = new Date();	
	
	@JsonIgnore
	@OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
	List<Authority> authorities;
	@JsonIgnore
	@OneToMany(mappedBy = "account")//1 thg co nhieu don hang
	List<Order> orders;
	@JsonIgnore

	@OneToMany(mappedBy = "ratingId")//1 thg co nhieu binh luan
	List<Rating> ratingId;
}