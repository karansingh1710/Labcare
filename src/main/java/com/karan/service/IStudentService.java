package com.karan.service;

import com.karan.dao.Student;

import java.util.List;


public interface IStudentService {
    void register(Student student);
    List<Student> getStudents();
    Student getStudentById(String email,String password);
    Student getStudentByEmail(String email);
}
