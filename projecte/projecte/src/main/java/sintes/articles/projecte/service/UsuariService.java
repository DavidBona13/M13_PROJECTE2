package sintes.articles.projecte.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sintes.articles.projecte.bean.Articles;
import sintes.articles.projecte.bean.Usuari;
import sintes.articles.projecte.dto.UsuariDTO;
import sintes.articles.projecte.exceptions.AttributeException;
import sintes.articles.projecte.exceptions.ResourceNotFoundException;
import sintes.articles.projecte.repository.UsuariRepository;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class UsuariService {

    @Autowired
    private UsuariRepository usuariRepository;

    public Usuari getByIdUser(int id) throws ResourceNotFoundException {
        return usuariRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));
    }

    public List<Usuari> getAllUsers(){
        return usuariRepository.findAll();
    }

    public Usuari saveUsuari(UsuariDTO usuariDto) throws AttributeException {
        Optional<Usuari> getUsuari = usuariRepository.findByNomOrEmail(usuariDto.getNom(), usuariDto.getEmail());
        if(getUsuari.isPresent()){
            throw new AttributeException("Este usuario ya esta registrado");
        }
        int id = autoIncrement();
        Usuari usuari = new Usuari(id, usuariDto.getNom(), usuariDto.getEmail(),usuariDto.getPwd(), usuariDto.getLlista_articles_creats(), usuariDto.getLlistes_creades());

        return usuariRepository.save(usuari);
    }

    public Usuari deleteUser(int id) throws ResourceNotFoundException {
        Usuari usuari = usuariRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("no existe"));
        usuariRepository.delete(usuari);
        return  usuari;
    }

    public Usuari findByEmail(String email){
        return usuariRepository.findByEmail(email);
    }

    private int autoIncrement () {
        List<Usuari> usuaris = usuariRepository.findAll();
        return usuaris.isEmpty()? 1 :
                usuaris.stream().max(Comparator.comparing(Usuari::getId)).get().getId() + 1;
    }
}
