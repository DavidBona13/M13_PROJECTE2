package sintes.articles.projecte.bean;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection="usuari")
public class Usuari {

    @Id
    private int id;

    private String nom;
    private String email;
    private String pwd;

    private List<Articles> llista_articles_creats;
    private List<Llistes> llistes_creades;

    public Usuari() {
    }

    public Usuari(int id, String nom, String email, String pwd, List<Articles> llista_articles_creats, List<Llistes> llistes_creades) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.pwd = pwd;
        this.llista_articles_creats = llista_articles_creats;
        this.llistes_creades = llistes_creades;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public List<Articles> getLlista_articles_creats() {
        return llista_articles_creats;
    }

    public void setLlista_articles_creats(List<Articles> llista_articles_creats) {
        this.llista_articles_creats = llista_articles_creats;
    }

    public List<Llistes> getLlistes_creades(){ return llistes_creades; }

    public void setLlistes_creades(List<Llistes> llistes_creades){ this.llistes_creades = llistes_creades; }

    @Override
    public String toString() {
        return "Usuari{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", email='" + email + '\'' +
                ", pwd='" + pwd + '\'' +
                ", llista_articles_creats=" + llista_articles_creats +
                ", llistes_creades=" + llistes_creades +
                '}';
    }
}
