package com.karan.service;

import com.karan.config.CaesarCipher;
import com.karan.dao.Student;
import com.karan.repo.AdminRepo;
import com.karan.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImp implements IStudentService{


    @Autowired
    private StudentRepo repo;



    @Override
    public void register(Student student) {
        String encryptPassword=CaesarCipher.encrypt(student.getPassword(),33);
        student.setPassword(encryptPassword);
        repo.save(student);
    }

    @Override
    public List<Student> getStudents() {
        return repo.findAll();
    }

    @Override
    public Student getStudentByEmail(String email){
        return repo.findByEmail(email);
    }

    @Override
    public Student getStudentById(String email, String password) {
       Student student= repo.findByEmailAndPassword(email,password);
       if (student!=null && student.getEmail().equals(email) && student.getPassword().equals(password)){
           return student;
       }
        return null;
    }
}
