package com.pvii.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.MailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
   
    @Autowired
    private MailSender mailSender;

    public void sendMail(Contact form) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(form.getEmail());
            message.setText("Name: " + form.getFname() + " " + form.getLname());
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
