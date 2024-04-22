package com.sintedia.appsintes.controller;


import com.sintedia.appsintes.bean.Articles;
import com.sintedia.appsintes.dto.ArticlesDto;
import com.sintedia.appsintes.service.ArticlesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class Controller {

    Articles article;

    @Autowired
    ArticlesService articleService;

    @GetMapping("/obtenerArticulos")
    public ResponseEntity<List<Articles>> getAll() {
        return ResponseEntity.ok(articleService.getAll());
    }


    @GetMapping("/articleId/{id}")
    public ResponseEntity<Articles> getOne(@PathVariable("id") int id) {
        return ResponseEntity.ok(articleService.getArticle(id));
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<Articles>> getCategoria(@PathVariable("categoria") String categoria){
        return ResponseEntity.ok(articleService.getArticleCategoria(categoria));
    }


    @PostMapping("/insertarArticle")
    public ResponseEntity<Articles> save(@RequestBody ArticlesDto dto){
        return ResponseEntity.ok(articleService.saveArticle(dto));
    }

    @PutMapping("/updateArticle/{id}")
    public ResponseEntity<Articles> update(@PathVariable("id") int id, @RequestBody ArticlesDto dto){
        return ResponseEntity.ok(articleService.updateArticle(id, dto));
    }

    @DeleteMapping("/deleteArticle/{id}")
    public ResponseEntity<Articles> delete(@PathVariable("id") int id){
        return ResponseEntity.ok(articleService.deleteArticles(id));
    }


}
