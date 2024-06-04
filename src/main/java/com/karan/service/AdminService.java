package com.karan.service;

import com.karan.dao.Admin;
import com.karan.repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
     @Autowired
     AdminRepo adminRepo;

     public Admin getAdmin(String email, String password){
         return adminRepo.findByEmailAndPassword(email,password);
     }

}
