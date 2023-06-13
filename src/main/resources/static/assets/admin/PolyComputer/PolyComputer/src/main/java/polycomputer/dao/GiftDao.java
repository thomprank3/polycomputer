package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polycomputer.entity.Gift;

@Repository
public interface GiftDao extends JpaRepository< Gift, Integer>{

}
