package com.karan.repo;


import com.karan.dao.Admin;
import org.springframework.data.jpa.repository.JpaRepository;



public interface AdminRepo extends JpaRepository<Admin, String> {
    Admin findByEmailAndPassword(String email, String password);
}
