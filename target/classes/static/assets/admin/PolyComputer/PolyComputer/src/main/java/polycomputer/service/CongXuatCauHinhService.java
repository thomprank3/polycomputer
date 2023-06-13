package polycomputer.service;

import java.util.List;

import polycomputer.entity.CongXuatCauHinh;

public interface CongXuatCauHinhService {

	void deleteById(Integer id);

	CongXuatCauHinh update(CongXuatCauHinh congXuatCauHinh);

	CongXuatCauHinh create(CongXuatCauHinh congXuatCauHinh);

	CongXuatCauHinh findById(Integer id);

	List<CongXuatCauHinh> findAll();

}
