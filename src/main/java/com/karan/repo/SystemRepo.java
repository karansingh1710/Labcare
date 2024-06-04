package com.karan.repo;

import com.karan.dao.PCSystem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SystemRepo extends JpaRepository<PCSystem,Integer> {

}
