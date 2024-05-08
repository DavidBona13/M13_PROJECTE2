package sintes.articles.projecte.bean;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "llistes")
public class Llistes {

    @Id
    private int id;

    private String nom_llista;

    private List<Integer> lista_articles;

    private int id_user;

    public Llistes() {
    }

    public Llistes(int id, String nom_llista, List<Integer> lista_articles, int id_user) {
        this.id = id;
        this.nom_llista = nom_llista;
        this.lista_articles = lista_articles;
        this.id_user = id_user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom_llista() {
        return nom_llista;
    }

    public void setNom_llista(String nom_llista) {
        this.nom_llista = nom_llista;
    }

    public List<Integer> getLista_articles() {
        return lista_articles;
    }

    public void setLista_articles(List<Integer> lista_articles) {
        this.lista_articles = lista_articles;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }
}
