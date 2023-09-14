package com.faculdadeimpacta.barbershop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BarbershopApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(BarbershopApplication.class, args);
	}

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry
      .addMapping("/**") // Mapeia todos os endpoints
      .allowedOrigins("*") // Permite de qualquer origem
      .allowedMethods("GET", "POST", "PUT", "DELETE") // Define os métodos HTTP permitidos
      .allowedHeaders("*"); // Permite qualquer cabeçalho
  }

}
