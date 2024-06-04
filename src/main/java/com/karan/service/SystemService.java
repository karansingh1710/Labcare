package com.karan.service;

import com.karan.dao.PCSystem;
import com.karan.repo.SystemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SystemService {
    @Autowired
    SystemRepo systemRepo;
    public void registerIssue(PCSystem pcSystem){
        systemRepo.save(pcSystem);
    }

    public List<PCSystem> getSystems(){
         return systemRepo.findAll();
    }
}
