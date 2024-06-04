package com.karan.rest;

import com.karan.config.CaesarCipher;
import com.karan.dao.Admin;
import com.karan.dao.Student;
import com.karan.dao.PCSystem;
import com.karan.service.AdminService;
import com.karan.service.IStudentService;
import com.karan.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class FormDataController {

    @Autowired
    IStudentService service;
    @Autowired
    AdminService adminService;
    @Autowired
    SystemService systemService;
// This method is used to get the access of admin login page.
    @GetMapping("/admin")
    public String getAdminPage(){
        return "admin_login_page";
    }
// This is used to check if the admin is authenticate or not. if yes then it successfully takes the admin to the dashboard
//    Other wise gives an error.
    @PostMapping("/admin")
    public String adminLogin(@RequestParam String email, @RequestParam String password){
        password=CaesarCipher.encrypt(password,10);
        Admin admin=adminService.getAdmin(email,password);
        if (admin!=null){
            return "admin_dashboard";
        }
        else return "admin_login_page";
    }

    @GetMapping("/register")
    public String getRegisterPage(){
        return "register_page";
    }

    @GetMapping("/login")
    public String getLoginPage(){
        return "login_page";
    }

    @GetMapping("/registerQuery")
    public String queryPage(){
        return "register-query";
    }

    @GetMapping("/report-issue")
    public String getIssuePage(){
        return "report-issue";
    }

    @PostMapping("report-issue")
    public String register(@ModelAttribute PCSystem pcSystem){
        systemService.registerIssue(pcSystem);
        return "success";
    }

    @GetMapping("/blogs")
    public String getBlog(){
        return "blog";
    }

    @GetMapping("/view-lab-status")
    public String viewLabStatus(Model model) {
        List<PCSystem> systems =systemService.getSystems();

        model.addAttribute("issues", systems);
        return "view-lab-status";
    }



    @PostMapping("/registerStudent")
    public String register(@ModelAttribute Student student , Model model){
       Student student1= service.getStudentByEmail(student.getEmail());
       if (student1==null) {
           service.register(student);
           System.out.println(student.getName());
           System.out.println(student.getEmail());
           System.out.println(student);
//            return "<h1 style=text-align:center>Success</h1>" +
//                    "<br> <a style=text-align:center href=" + "/login.html" + ">Login Here</a>"+"<br>" +
//                    "<a href="+"/templates/register-query.html"+">RegisterQuery</a>";

           model.addAttribute("message", "Success");
           return "success";
       }
       return "register_page";
    }

    @GetMapping("/view_students")
    public String getStudents(Model model) {
        List<Student> students =service.getStudents();

        model.addAttribute("students", students);
        return "view_students";
    }

//    @GetMapping("/get_students")
//    @ResponseBody
//    public List<Student> getAllStudents() {
//        return service.getStudents();
//    }
////    @GetMapping("/getStudent/{email}/{password}")
////    public void getStudentById(@PathVariable String email, @PathVariable String password){
////        service.getStudent(email,password);
////    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password, Model model){
        password= CaesarCipher.encrypt(password,33);
        Student student=service.getStudentById(email,password);
        if (student!=null){
            model.addAttribute("user",student.getName());
            return "welcome_page";
        }
       return "login_page";
    }
}
