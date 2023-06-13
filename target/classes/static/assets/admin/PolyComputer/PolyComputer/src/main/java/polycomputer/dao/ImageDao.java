package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.Image;

@Repository
public interface ImageDao extends JpaRepository<Image, Integer>{

}
