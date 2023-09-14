package com.faculdadeimpacta.barbershop.token;

import com.faculdadeimpacta.barbershop.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ConfirmationToken {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String token;
  @Column(nullable = false)
  private LocalDateTime createdAt;
  @Column(nullable = false)
  private LocalDateTime expiresAt;
  private LocalDateTime confirmedAt;

  @ManyToOne
  @JoinColumn(
    nullable = false,
    name = "usuario_id"
  )
  private Usuario usuario;



  public ConfirmationToken(String token, LocalDateTime createdAt, LocalDateTime expiresAt, Usuario usuario) {
    this.token = token;
    this.createdAt = createdAt;
    this.expiresAt = expiresAt;
    this.usuario = usuario;
  }
}
