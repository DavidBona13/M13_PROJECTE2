package sintes.articles.projecte.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import sintes.articles.projecte.bean.Articles;
import sintes.articles.projecte.bean.Usuari;
import sintes.articles.projecte.dto.ArticlesDto;
import sintes.articles.projecte.exceptions.AttributeException;
import sintes.articles.projecte.exceptions.ResourceNotFoundException;
import sintes.articles.projecte.repository.ArticlesRepository;

import java.util.Comparator;
import java.util.List;

@Service
public class ArticlesService {

    @Autowired
    ArticlesRepository articlesRepository;

    public List<Articles> getAll() {
        return articlesRepository.findAll();
    }

    public Articles getArticle(int id) throws ResourceNotFoundException {
        return articlesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not found"));
    }

    public Articles getArtTitol(String titol) throws  ResourceNotFoundException{
        return articlesRepository.findByTitol(titol)
                .orElseThrow(() -> new ResourceNotFoundException("no existe"));
    }

    public List<Articles> getArticleCategoria(String categoria){
        return articlesRepository.findByCategoria(categoria);
    }

    public List<Articles> getArticlesWithNonEmptySubcategory() {
        return articlesRepository.findBySubcategoriaIsNotNullAndSubcategoriaNot("");
    }

    public List<Articles> getArtCat(){
        return articlesRepository.findByCategoriaEmpresa();
    }

    public Articles saveArticle(ArticlesDto articleDto) throws AttributeException {
        if(articlesRepository.existsByTitol(articleDto.getTitol())){
            throw new AttributeException("name already in use");
        }
        int id = autoIncrement();
        Articles article = new Articles(id,  articleDto.getTitol(), articleDto.getDescripcio(), articleDto.getAutor(), articleDto.getDate(), articleDto.getCategoria(), articleDto.getSubcategoria(), articleDto.getImgURL(), articleDto.getImgSubcategoria());
        //Usuari usuari = usuariService.getUsuariById(dto.getUserId());
        return articlesRepository.save(article);
    }

    public Articles updateArticle(int id, ArticlesDto articleDto) throws ResourceNotFoundException, AttributeException {
        Articles article = articlesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not found"));
        if(articlesRepository.existsByTitol(articleDto.getTitol()) && articlesRepository.findByTitol(articleDto.getTitol()).get().getId() != id){
            throw new AttributeException("name not exist");
        }
        article.setTitol(articleDto.getTitol());
        article.setDescripcio(articleDto.getDescripcio());
        article.setAutor(articleDto.getAutor());
        article.setDate(articleDto.getDate());
        article.setCategoria(articleDto.getCategoria());
        article.setSubcategoria(articleDto.getSubcategoria());
        return articlesRepository.save(article);
    }

    public Articles deleteArticles(int id) throws ResourceNotFoundException {
        Articles article = articlesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not found"));
        articlesRepository.delete(article);
        return article;
    }

    public List<Articles> getArtByCatISubcat(String categoria, String subcategoria ){
        return articlesRepository.findArticleByCatandSubcat(categoria, subcategoria);
    }

    public List<Articles> getArtBySubcat(String subcategoria){
        return articlesRepository.findArticleBySubcategoria(subcategoria);
    }

    public List<Articles> getLast20Art(){
        return articlesRepository.findLatest20Articles();
    }

    public List<Articles> findLatest20ArticlesByCategoria(String categoria) {
        Pageable pageable = PageRequest.of(0, 20);
        return articlesRepository.findLatest20ArticlesByCategoriaOrderByFechaDesc(categoria, pageable);
    }

    private int autoIncrement () {
        List<Articles> articles = articlesRepository.findAll();
        return articles.isEmpty()? 1 :
                articles.stream().max(Comparator.comparing(Articles::getId)).get().getId() + 1;
    }
}



