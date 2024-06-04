package com.karan.config;

import com.karan.dao.Admin;
import com.karan.repo.AdminRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {

    @Bean
    public CommandLineRunner loadData(AdminRepo adminRepository) {
        return args -> {
            if (adminRepository.findById("admin@example.com").isEmpty()) {
                Admin admin = new Admin();
                admin.setEmail("admin@example.com");
                admin.setName("Admin");
                admin.setPassword(CaesarCipher.encrypt("Admin123@",10));
                adminRepository.save(admin);
            }
        };
    }
}

