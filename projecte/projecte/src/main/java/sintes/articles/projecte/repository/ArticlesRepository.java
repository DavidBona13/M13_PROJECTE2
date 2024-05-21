package sintes.articles.projecte.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import sintes.articles.projecte.bean.Articles;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticlesRepository extends MongoRepository<Articles, Integer> {
    List<Articles> findByCategoria(String categoria);
    boolean existsByTitol(String titol);
    Optional<Articles> findByTitol(String name);
    List<Articles> findBySubcategoriaIsNotNullAndSubcategoriaNot(String subcategoria);

    @Query("{categoria: '?0', subcategoria: '?1'}")
    List<Articles> findArticleByCatandSubcat(String categoria, String subcategoria);

    @Query("{subcategoria: '?0'}")
    List<Articles> findArticleBySubcategoria(String subcategoria);

    //@Query("{ $query: {}, $orderby: { _id : -1 }, $limit: 20 }")
    @Query("{}, $orderby: { _id : -1 }, $limit: 20")
    List<Articles> findLatest20Articles();

    @Query("{categoria: '?0'}")
    List<Articles> findLatest20ArticlesByCategoriaOrderByFechaDesc(String categoria, Pageable pageable);
}
