package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import polycomputer.entity.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category, Integer>{

}
