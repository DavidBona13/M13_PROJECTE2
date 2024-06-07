package sintes.articles.projecte.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import sintes.articles.projecte.bean.Usuari;

import java.util.Optional;

@Repository
public interface UsuariRepository extends MongoRepository<Usuari, Integer> {

    Optional<Usuari> findByNomOrEmail(String nom, String email);
    Usuari findByEmail(String email);

}

