package sintes.articles.projecte.service;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sintes.articles.projecte.bean.Llistes;
import sintes.articles.projecte.dto.LlistesDto;
import sintes.articles.projecte.exceptions.AttributeException;
import sintes.articles.projecte.exceptions.ResourceNotFoundException;
import sintes.articles.projecte.repository.LlistesRepository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class LlistesService {

    @Autowired
    private LlistesRepository llistaRepository;

    public List<Llistes> getAll()
    {
        return llistaRepository.findAll();
    }

    public Llistes getById(int id) throws ResourceNotFoundException {
        return llistaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("not found"));
    }

    public Llistes saveLlista(Llistes llista) throws AttributeException
    {
        if(llistaRepository.existsByNomLlista(llista.getNomLlista())){
            throw new AttributeException("name already in use");
        }
        int id = autoIncrement();
        Llistes llistes = new Llistes(id, llista.getNomLlista(), llista.getListaArticles(), llista.getId_user());
        return llistaRepository.save(llistes);
    }

    public Llistes addArticleToList(int llistaId, int articleId) throws ResourceNotFoundException, AttributeException {

        Llistes llista = getById(llistaId);
        
        if (llista.getListaArticles() == null) {
            llista.setListaArticles(new ArrayList<>());
        }
        if (llista.getListaArticles().contains(articleId)) {
            throw new AttributeException("El artículo ya está en la lista");
        }
        llista.getListaArticles().add(articleId);

        return llistaRepository.save(llista);
    }

    public List<Llistes> deleteArtLlista(int id_article, Llistes llista) throws AttributeException
    {
        Optional<Llistes> list = llistaRepository.findById(llista.getId());
        if(list.isPresent()){
            Llistes list2 = list.get();
            List<Integer> listBucle = list2.getListaArticles();
            for(Integer idArticle : listBucle){
                if (idArticle == id_article){
                    listBucle.remove(idArticle);
                    break;
                }
            }
            llistaRepository.save(list2);
            return llistaRepository.findAll();
        } else {
            throw new AttributeException("list not exist");
        }
    }
    /*
    *  public Llistes removeArticleFromList(int listaId, int articuloId) throws ResourceNotFoundException {
        Llistes lista = getById(listaId);

        // Verificar si el artículo está en la lista
        if (!lista.getListaArticles().contains(articuloId)) {
            throw new AttributeException("El artículo no está en la lista");
        }

        // Remover el artículo de la lista
        lista.getListaArticles().remove(Integer.valueOf(articuloId));

        // Guardar la lista actualizada
        return llistesRepository.save(lista);
    }*/

    private int autoIncrement () {
        List<Llistes> llistes = llistaRepository.findAll();
        return llistes.isEmpty()? 1 :
                llistes.stream().max(Comparator.comparing(Llistes::getId)).get().getId() + 1;
    }
}
