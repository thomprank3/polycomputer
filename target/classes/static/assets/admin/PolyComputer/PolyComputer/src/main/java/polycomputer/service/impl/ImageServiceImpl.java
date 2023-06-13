package polycomputer.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import polycomputer.dao.BanPhimDao;
import polycomputer.dao.CategoryDao;
import polycomputer.dao.CustomerDao;
import polycomputer.dao.GiftDao;
import polycomputer.dao.ImageDao;
import polycomputer.entity.BanPhim;
import polycomputer.entity.Category;
import polycomputer.entity.Customer;
import polycomputer.entity.Gift;
import polycomputer.entity.Image;
import polycomputer.service.BanPhimService;
import polycomputer.service.CategoryService;
import polycomputer.service.CustomerService;
import polycomputer.service.GiftService;
import polycomputer.service.ImageService;


@Service
public class ImageServiceImpl implements ImageService {
@Autowired
ImageDao dao;
@Override
public List<Image> findAll() {
	
	return dao.findAll();
}
@Override
public Image findById(Integer id) {
	return dao.findById(id).get();
}
@Override
public Image create(Image image) {
	return dao.save(image);
}
@Override
public Image update(Image image) {
	return dao.save(image);


}
@Override
public void deleteById(Integer id) {
	 dao.deleteById(id);		
}



}
