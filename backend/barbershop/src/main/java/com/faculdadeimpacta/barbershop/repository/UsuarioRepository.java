package com.faculdadeimpacta.barbershop.repository;

import com.faculdadeimpacta.barbershop.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
}
