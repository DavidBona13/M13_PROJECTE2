package sintes.articles.projecte.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import sintes.articles.projecte.bean.Articles;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticlesRepository extends MongoRepository<Articles, Integer> {
    List<Articles> findByCategoria(String categoria);
    boolean existsByTitol(String titol);
    Optional<Articles> findByTitol(String name);
}
