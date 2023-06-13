package polycomputer.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import polycomputer.dao.BanPhimDao;
import polycomputer.dao.CongKetNoiDao;
import polycomputer.dao.CongXuatCauHinhDao;
import polycomputer.dao.CustomerDao;
import polycomputer.entity.BanPhim;
import polycomputer.entity.CongKetNoi;
import polycomputer.entity.CongXuatCauHinh;
import polycomputer.entity.Customer;
import polycomputer.service.BanPhimService;
import polycomputer.service.CongKetNoiService;
import polycomputer.service.CongXuatCauHinhService;
import polycomputer.service.CustomerService;


@Service
public class CongXuatCauHinhServiceImpl implements CongXuatCauHinhService {
@Autowired
CongXuatCauHinhDao dao;
@Override
public List<CongXuatCauHinh> findAll() {
	
	return dao.findAll();
}
@Override
public CongXuatCauHinh findById(Integer id) {
	return dao.findById(id).get();
}
@Override
public CongXuatCauHinh create(CongXuatCauHinh congXuatCauHinh) {
	return dao.save(congXuatCauHinh);
}
@Override
public CongXuatCauHinh update(CongXuatCauHinh congXuatCauHinh) {
	return dao.save(congXuatCauHinh);


}
@Override
public void deleteById(Integer id) {
	 dao.deleteById(id);		
}



}
