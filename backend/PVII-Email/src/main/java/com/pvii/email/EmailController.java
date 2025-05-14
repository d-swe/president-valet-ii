package com.pvii.email;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact")
    public void sendEmail(@RequestBody Contact form) {
        try {
            emailService.sendMail(form);
            System.out.println("Name: " + form.getFname() + " " + form.getLname() + " Email: " + form.getEmail() + " Phone: " + form.getPhone() + " Message: " + form.getMessage());
            // return ResponseEntity.status(HttpStatus.OK).build();
        } catch (Exception e) {
            // return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    

}
