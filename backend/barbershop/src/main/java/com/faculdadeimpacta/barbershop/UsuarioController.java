package com.faculdadeimpacta.barbershop;

import com.faculdadeimpacta.barbershop.model.Usuario;
import com.faculdadeimpacta.barbershop.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario usuario) {
        Usuario novoUsuario = usuarioService.salvarUsuario(usuario);
        return ResponseEntity.ok("Usuário registrado com sucesso");
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> getAllUsers() {
        List<Usuario> usuarios = usuarioService.buscarTodosUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUserById(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.buscarUsuarioPorId(id);
        return usuario.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody Usuario usuario) {
        Optional<Usuario> usuarioExistente = usuarioService.buscarUsuarioPorId(id);

        if (usuarioExistente.isPresent()) {
            Usuario usuarioAtual = usuarioExistente.get();
            usuarioAtual.setNome(usuario.getNome());
            usuarioAtual.setSobrenome(usuario.getSobrenome());
            usuarioAtual.setEmail(usuario.getEmail());
            usuarioAtual.setCpf(usuario.getCpf());
            usuarioAtual.setRole(usuario.getRole());
            usuarioAtual.setEmail(usuario.getEmail());
            Usuario usuarioAtualizado = usuarioService.atualizarUsuario(usuarioAtual);
            return ResponseEntity.ok("Usuário atualizado com sucesso");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        usuarioService.excluirUsuarioPorId(id);
        return ResponseEntity.ok("Usuário excluído com sucesso");
    }
}
