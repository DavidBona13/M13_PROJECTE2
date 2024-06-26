package sintes.articles.projecte.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sintes.articles.projecte.bean.Llistes;
import sintes.articles.projecte.dto.LlistesDto;
import sintes.articles.projecte.dto.MessageDto;
import sintes.articles.projecte.exceptions.AttributeException;
import sintes.articles.projecte.exceptions.ResourceNotFoundException;
import sintes.articles.projecte.repository.LlistesRepository;
import sintes.articles.projecte.service.LlistesService;

import java.util.List;

@RestController
@RequestMapping("/listas")
@CrossOrigin(origins = "http://localhost:4200")
public class ControllerList {

    @Autowired
    private LlistesService llistesService;

    @GetMapping("/getAllLista")
    public ResponseEntity<List<Llistes>> getAll(){
        return ResponseEntity.ok(llistesService.getAll());
    }

    @GetMapping("/GetById/{id}")
    public ResponseEntity<Llistes> getLlistaId(@PathVariable("id") int id) throws ResourceNotFoundException {
        return ResponseEntity.ok(llistesService.getById(id));
    }


    @PostMapping("/addLlista")
    public ResponseEntity<MessageDto> insertLlista(@Valid @RequestBody Llistes llista) throws AttributeException {
        Llistes llista2 = llistesService.saveLlista(llista);
        String message = "El artículo " + llista2.getNomLlista() + " ha sido guardado. ";
        return ResponseEntity.ok(new MessageDto(HttpStatus.OK, message));
    }

    @PutMapping("/addArtToList/{llistaId}/{articleId}")
    public ResponseEntity<MessageDto> addArticleALlista(@PathVariable("llistaId") int llistaId, @PathVariable("articleId") int articleId){
        try {
            Llistes listaActualizada = llistesService.addArticleToList(llistaId, articleId);
            String message = "Artículo " + articleId + " agregado a la lista " + llistaId;
            return ResponseEntity.ok(new MessageDto(HttpStatus.OK, message));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageDto(HttpStatus.NOT_FOUND, "Lista no encontrada con el ID: " + llistaId));
        } catch (AttributeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageDto(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @DeleteMapping("/deleteArtList/{id}")
    public ResponseEntity<MessageDto> deleteArtLlista2(@PathVariable("id") int id, @Valid @RequestBody Llistes llista) throws AttributeException {
        Llistes llista2 = (Llistes) llistesService.deleteArtLlista(id, llista);
        String message = "La lista " + llista.getNomLlista() + " ha sido eliminado. ";
        return ResponseEntity.ok(new MessageDto(HttpStatus.OK, message));
    }
}
