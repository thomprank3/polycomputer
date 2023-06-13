package polycomputer.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("serial")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity @Table(name = "Products")
public class Product  implements Serializable{
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer productId;
	String productName;
	String anhChinh;
	Double gia;
	Double khoiLuong;
	Integer soLuong;
	Integer giamGia;
	Integer baoHanh;
	Double kichThuoc;
	String productSlug;
	String description;
	@Temporal(TemporalType.DATE)
	@Column(name = "created_At")
	Date createdAt = new Date();	
	@Temporal(TemporalType.DATE)
	@Column(name = "updated_At")
	Date updatedAt = new Date();
	Integer discount;
	Boolean available;
	@ManyToOne
	@JoinColumn(name = "categoryId")
	Category category;
	@ManyToOne
	@JoinColumn(name = "brandId")
	Brand brandId;
	@ManyToOne
	@JoinColumn(name = "cpuId")
	CPU cpuId;
	@ManyToOne
	@JoinColumn(name = "cpuSerieId")
	CPUSerie cpuSerieId;
	@ManyToOne
	@JoinColumn(name = "colorId")
	Color colorId;
	@ManyToOne
	@JoinColumn(name = "chipDoHoaId")
	ChipDoHoa chipDoHoaId;
	@ManyToOne
	@JoinColumn(name = "manHinhId")
	ManHinh manHinhId;
	@ManyToOne
	@JoinColumn(name = "ramId")
	RAM ramId;
	@ManyToOne
	@JoinColumn(name = "luuTruId")
	LuuTru luuTruId;
	@ManyToOne
	@JoinColumn(name = "soCongLuuTruToiDaId")
	SoCongLuuTruToiDa soCongLuuTruToiDaId;
	@ManyToOne
	@JoinColumn(name = "congXuatHinhId")
	CongXuatCauHinh congXuatHinhId;
	@ManyToOne
	@JoinColumn(name = "congKetNoiId")
	CongKetNoi congKetNoiId;
	@ManyToOne
	@JoinColumn(name = "banPhimId")
	BanPhim banPhimId;
	@ManyToOne
	@JoinColumn(name = "heDieuHanhId")
	HeDieuHanh heDieuHanhId;
	@ManyToOne
	@JoinColumn(name = "pinId")
	Pin pinId;
	@ManyToOne
	@JoinColumn(name = "quaTangId")
	Gift quaTangId;
	@ManyToOne
	@JoinColumn(name = "phuKienDiKemId")
	PhuKienDiKem phuKienDiKemId;
	@JsonIgnore
	@OneToMany(mappedBy = "productId")
	List<OrderDetail> orderDetails;	
	@JsonIgnore
	@OneToMany(mappedBy = "productId")
	List<Image> images;	
	@JsonIgnore
	@OneToMany(mappedBy = "ratingId")//1 thg co nhieu binh luan
	List<Rating> ratings;
}