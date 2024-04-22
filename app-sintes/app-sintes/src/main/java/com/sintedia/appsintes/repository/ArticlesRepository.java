package com.sintedia.appsintes.repository;

import com.sintedia.appsintes.bean.Articles;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticlesRepository extends MongoRepository<Articles, Integer> {
    List<Articles> findByCategoria(String categoria);
    boolean existByTitol(String titol);
    Optional<Articles> findByTitol(String name);
}
