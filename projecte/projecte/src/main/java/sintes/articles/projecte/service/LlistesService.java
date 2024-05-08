package sintes.articles.projecte.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sintes.articles.projecte.bean.Articles;
import sintes.articles.projecte.bean.Llistes;
import sintes.articles.projecte.exceptions.AttributeException;
import sintes.articles.projecte.repository.LlistesRepository;

import java.util.Comparator;
import java.util.List;

@Service
public class LlistesService {

    @Autowired
    private LlistesRepository llistaRepository;

    public List<Llistes> getAll()
    {
        return llistaRepository.findAll();
    }

    public Llistes saveLlista(Llistes llista) throws AttributeException
    {
        if(llistaRepository.existsByNom_llista(llista.getNom_llista())){
            throw new AttributeException("name already in use");
        }
        int id = autoIncrement();
        Llistes llistes = new Llistes(id, llista.getNom_llista(), llista.getLista_articles(), llista.getId_user());
        return llistaRepository.save(llistes);
    }

    private int autoIncrement () {
        List<Llistes> llistes = llistaRepository.findAll();
        return llistes.isEmpty()? 1 :
                llistes.stream().max(Comparator.comparing(Llistes::getId)).get().getId() + 1;
    }
}
