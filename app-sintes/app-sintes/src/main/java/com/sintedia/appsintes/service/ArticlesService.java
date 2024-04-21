package com.sintedia.appsintes.service;

import com.sintedia.appsintes.bean.Articles;
import com.sintedia.appsintes.dto.ArticlesDto;
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


    public Articles getArticle(int id) {
        return articlesRepository.findById(id).get();
    }

    public Articles saveArticle(ArticlesDto articleDto){
        int id = autoIncrement();
        Articles article = new Articles(id,  articleDto.getTitol(), articleDto.getDescripcio(), articleDto.getCategoria(), articleDto.getSubcategoria(), articleDto.getAutor(), articleDto.getDate());
        return articlesRepository.save(article);
    }

    public Articles updateArticle(int id, ArticlesDto articleDto){
        Articles article = articlesRepository.findById(id).get();
        article.setTitol(articleDto.getTitol());
        article.setDescripcio(articleDto.getDescripcio());
        article.setCategoria(articleDto.getCategoria());
        article.setSubcategoria(articleDto.getSubcategoria());
        article.setAutor(articleDto.getAutor());
        article.setDate(articleDto.getDate());
        return articlesRepository.save(article);
    }

    public Articles deleteArticles(int id){
        Articles article = articlesRepository.findById(id).get();
        articlesRepository.delete(article);
        return article;
    }



    private int autoIncrement () {
        List<Articles> articles = articlesRepository.findAll();
        return articles.isEmpty()? 1 :
                articles.stream().max(Comparator.comparing(Articles::getId)).get().getId() + 1;
    }
}


