package sintes.articles.projecte.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sintes.articles.projecte.bean.Articles;
import sintes.articles.projecte.dto.ArticlesDto;
import sintes.articles.projecte.dto.MessageDto;
import sintes.articles.projecte.exceptions.AttributeException;
import sintes.articles.projecte.exceptions.ResourceNotFoundException;
import sintes.articles.projecte.service.ArticlesService;

import java.util.List;

@RestController
@RequestMapping("/articles")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

    @Autowired
    ArticlesService articleService;

    @GetMapping("/obtenerArticulos")
    public ResponseEntity<List<Articles>> getAll() {
        return ResponseEntity.ok(articleService.getAll());
    }
    
    @GetMapping("/articleId/{id}")
    public ResponseEntity<Articles> getOne(@PathVariable("id") int id) throws ResourceNotFoundException {
        return ResponseEntity.ok(articleService.getArticle(id));
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<Articles>> getCategoria(@PathVariable("categoria") String categoria){
        return ResponseEntity.ok(articleService.getArticleCategoria(categoria));
    }

    @GetMapping("/catisubcat/{categoria}/{subcategoria}")
    public ResponseEntity<List<Articles>> getcatISubcat(@PathVariable("categoria") String categoria,
                                                        @PathVariable ("subcategoria") String subcategoria){
        return ResponseEntity.ok(articleService.getArtByCatISubcat(categoria, subcategoria));
    }

    @GetMapping("/subcategoria/{subcategoria}")
    public ResponseEntity<List<Articles>> getSubcat(@PathVariable("subcategoria") String subcategoria){
        return ResponseEntity.ok(articleService.getArtBySubcat(subcategoria));
    }

    @GetMapping("/latest20art")
    public ResponseEntity<List<Articles>> get20LatestArt(){
        return ResponseEntity.ok(articleService.getLast20Art());
    }

    @GetMapping("/latest20categoria/{categoria}")
    public ResponseEntity<List<Articles>> get20Latestcategoria(@PathVariable("categoria") String categoria){
        return ResponseEntity.ok(articleService.findLatest20ArticlesByCategoria(categoria));
    }

    @PostMapping("/insertarArticle")
    public ResponseEntity<MessageDto> save(@Valid @RequestBody ArticlesDto dto) throws AttributeException {
        Articles article = articleService.saveArticle(dto);
        String message = "El artículo " + article.getTitol() + " ha sido guardado. ";
        return ResponseEntity.ok(new MessageDto(HttpStatus.OK, message));
    }

    @PutMapping("/updateArticle/{id}")
    public ResponseEntity<MessageDto> update(@PathVariable("id") int id, @Valid @RequestBody ArticlesDto dto) throws ResourceNotFoundException, AttributeException {
        Articles article = articleService.updateArticle(id, dto);
        String message = "El artículo " + article.getTitol() + " ha sido actualizado. ";
        return ResponseEntity.ok(new MessageDto(HttpStatus.OK, message));
    }

    @DeleteMapping("/deleteArticle/{id}")
    public ResponseEntity<MessageDto> delete(@PathVariable("id") int id) throws ResourceNotFoundException {
        Articles article = articleService.deleteArticles(id);
        String message = "El artículo " + article.getTitol() + " ha sido eliminado. ";
        return ResponseEntity.ok(new MessageDto(HttpStatus.OK, message));
    }


}

