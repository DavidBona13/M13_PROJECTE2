package sintes.articles.projecte.bean;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "llistes")
public class Llistes {

    @Id
    private int id;

    private String nomLlista;

    private List<Integer> listaArticles;

    private int id_user;

    public Llistes() {
    }

    public Llistes(int id, String nomLlista, List<Integer> listaArticles, int id_user) {
        this.id = id;
        this.nomLlista = nomLlista;
        this.listaArticles = listaArticles;
        this.id_user = id_user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomLlista() {
        return nomLlista;
    }

    public void setNomLlista(String nomLlista) {
        this.nomLlista = nomLlista;
    }

    public List<Integer> getListaArticles() {
        return listaArticles;
    }

    public void setListaArticles(List<Integer> listaArticles) {
        this.listaArticles = listaArticles;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    @Override
    public String toString() {
        return "Llistes{" +
                "id=" + id +
                ", nomLlista='" + nomLlista + '\'' +
                ", listaArticles=" + listaArticles +
                ", id_user=" + id_user +
                '}';
    }
}
