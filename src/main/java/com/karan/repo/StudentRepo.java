package com.karan.repo;

import com.karan.dao.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,String> {
    Student findByEmailAndPassword(String email, String password);
    Student findByEmail(String email);
}
