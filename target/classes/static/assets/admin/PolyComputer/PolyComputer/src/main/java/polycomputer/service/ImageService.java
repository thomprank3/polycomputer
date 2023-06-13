package polycomputer.service;

import java.util.List;

import polycomputer.entity.Image;

public interface ImageService {

	void deleteById(Integer id);

	Image update(Image image);

	Image create(Image image);

	Image findById(Integer id);

	List<Image> findAll();

}
