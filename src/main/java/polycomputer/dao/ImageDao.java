package polycomputer.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polycomputer.entity.Images;

@Repository
public interface ImageDao extends JpaRepository<Images, Integer>{
	
	
	 
} 
