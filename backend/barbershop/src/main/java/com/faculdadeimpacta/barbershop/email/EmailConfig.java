package com.faculdadeimpacta.barbershop.email;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public class EmailConfig {

  @Bean
  public JavaMailSender javaMailSender() {
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost("localhost"); // Aponte para o MailDev
    mailSender.setPort(1025); // Porta padrão do MailDev
    mailSender.setUsername("seu_nome_de_usuario"); // Não é necessário autenticação no MailDev
    mailSender.setPassword("sua_senha"); // Não é necessário autenticação no MailDev

    Properties props = mailSender.getJavaMailProperties();
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.auth", "false"); // Não é necessário autenticação no MailDev
    props.put("mail.smtp.starttls.enable", "false"); // Não é necessário TLS no MailDev
    props.put("mail.debug", "true");


    return mailSender;
  }


}
