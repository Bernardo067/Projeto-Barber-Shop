package com.faculdadeimpacta.barbershop.service;

import com.faculdadeimpacta.barbershop.email.EmailSender;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


@Service
public class EmailService implements EmailSender {

  private final static Logger LOGGER = LoggerFactory.getLogger(EmailService.class);

  private final JavaMailSender mailSender;

  @Autowired
  public EmailService(JavaMailSender mailSender) {
    this.mailSender = mailSender;
  }
  @Override
  @Async
  public void send(String para, String email) {
    try {
      MimeMessage mimeMessage = mailSender.createMimeMessage();
      MimeMessageHelper helper =
        new MimeMessageHelper(mimeMessage, "utf-8");
      helper.setText(email, true);
      helper.setTo(para);
      helper.setSubject("Confirme seu email");
      helper.setFrom("henricost2@gmail.com");
      mailSender.send(mimeMessage);
    } catch (MessagingException e) {
      LOGGER.error("falha ao enviar o email", e);
      throw new IllegalStateException("Falha ao enviar email");
    }
  }

  }

