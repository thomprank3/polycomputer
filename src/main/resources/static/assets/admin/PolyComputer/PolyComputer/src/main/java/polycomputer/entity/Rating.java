package polycomputer.entity;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity 
@Table(name = "Rating")
public class Rating implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer ratingId;
	Integer star;
	String noiDung;
	String description;
	@Temporal(TemporalType.DATE)
	@Column(name = "created_At")
	Date createdAt = new Date();	
	@Temporal(TemporalType.DATE)
	@Column(name = "updated_At")
	Date updatedAt = new Date();
	@ManyToOne
	@JoinColumn(name = "customerId")
	Customer customer;
	@ManyToOne
	@JoinColumn(name = "productId")
	Product product;
}
