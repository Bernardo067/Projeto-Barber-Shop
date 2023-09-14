package com.faculdadeimpacta.barbershop.service;

import com.faculdadeimpacta.barbershop.model.Usuario;
import com.faculdadeimpacta.barbershop.repository.UsuarioRepository;
import com.faculdadeimpacta.barbershop.token.ConfirmationToken;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UsuarioService implements UserDetailsService {

    private final static String USUARIO_NOT_FOUND_MESSAGE = "User with email %s not found";
    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;


    public Usuario salvarUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> buscarTodosUsuarios(){
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> buscarUsuarioPorId(Long id){
        return usuarioRepository.findById(id);
    }

    public Usuario atualizarUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public void excluirUsuarioPorId(Long id){
        usuarioRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(String.format(USUARIO_NOT_FOUND_MESSAGE, email)));
    }

    public String cadastrarUsuario(Usuario usuario){

        boolean usuarioExiste = usuarioRepository.findByEmail(usuario.getEmail())
                .isPresent();

        if (usuarioExiste){
            throw new IllegalStateException("Email já cadastrado");
        }

        String senhaEncodada = bCryptPasswordEncoder.encode(usuario.getPassword());

        usuario.setSenha(senhaEncodada);

        usuarioRepository.save(usuario);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmacao = new ConfirmationToken(
            token,
            LocalDateTime.now(),
            LocalDateTime.now().plusMinutes(15),
            usuario
        );
        confirmationTokenService.saveConfirmationToken(confirmacao);

        return token;
    }

    public int enableAppUser(String email) {
        return usuarioRepository.enableAppUser(email);
    }
}
