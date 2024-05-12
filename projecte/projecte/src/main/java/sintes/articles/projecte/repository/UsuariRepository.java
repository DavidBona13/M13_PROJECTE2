package sintes.articles.projecte.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import sintes.articles.projecte.bean.Usuari;

@Repository
public interface UsuariRepository extends MongoRepository<Usuari, Integer> {
}
