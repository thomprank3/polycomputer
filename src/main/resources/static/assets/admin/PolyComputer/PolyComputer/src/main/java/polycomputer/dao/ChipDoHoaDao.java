package polycomputer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import polycomputer.entity.ChipDoHoa;

@Repository

public interface ChipDoHoaDao extends JpaRepository<ChipDoHoa,Integer>{

}
