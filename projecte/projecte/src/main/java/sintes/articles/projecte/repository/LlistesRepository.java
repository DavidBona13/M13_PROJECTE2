package sintes.articles.projecte.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import sintes.articles.projecte.bean.Llistes;

@Repository
public interface LlistesRepository extends MongoRepository<Llistes, Integer> {
    boolean existsByNomLlista(String nom_llista);
}
