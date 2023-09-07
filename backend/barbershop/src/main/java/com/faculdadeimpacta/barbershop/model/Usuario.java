package com.faculdadeimpacta.barbershop.model;

import lombok.Data;
import com.faculdadeimpacta.barbershop.Role;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Usuario{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String sobrenome;
    private String email;
    private String senha;
    private String cpf;


    @Enumerated(EnumType.STRING)
    private Role role;

    public Usuario(){}
    public Usuario(Long id, String nome, String email, String senha, String cpf, Role role) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.role = role;
    }
}
