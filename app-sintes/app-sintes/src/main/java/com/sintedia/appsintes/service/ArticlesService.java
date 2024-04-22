package com.sintedia.appsintes.service;

import com.sintedia.appsintes.bean.Articles;
import com.sintedia.appsintes.dto.ArticlesDto;
import com.sintedia.appsintes.exceptions.AttributeException;
import com.sintedia.appsintes.exceptions.ResourceNotFoundException;
import com.sintedia.appsintes.repository.ArticlesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<Articles> getArticleCategoria(String categoria){
        return articlesRepository.findByCategoria(categoria);
    }

    public Articles saveArticle(ArticlesDto articleDto) throws AttributeException {
        if(articlesRepository.existByTitol(articleDto.getTitol())){
            throw new AttributeException("name already in use");
        }
        int id = autoIncrement();
        Articles article = new Articles(id,  articleDto.getTitol(), articleDto.getDescripcio(), articleDto.getAutor(), articleDto.getDate(), articleDto.getCategoria(), articleDto.getSubcategoria());
        return articlesRepository.save(article);
    }

    public Articles updateArticle(int id, ArticlesDto articleDto) throws ResourceNotFoundException, AttributeException {
        Articles article = articlesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not found"));
        if(articlesRepository.existByTitol(articleDto.getTitol()) && articlesRepository.findByTitol(articleDto.getTitol()).get().getId() != id){
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



    private int autoIncrement () {
        List<Articles> articles = articlesRepository.findAll();
        return articles.isEmpty()? 1 :
                articles.stream().max(Comparator.comparing(Articles::getId)).get().getId() + 1;
    }
}


