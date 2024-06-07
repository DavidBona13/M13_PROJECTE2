package sintes.articles.projecte.dto;

import jakarta.validation.constraints.NotBlank;
import sintes.articles.projecte.bean.Articles;
import sintes.articles.projecte.bean.Llistes;

import java.util.List;

public class UsuariDTO {

    @NotBlank(message = "El nombre es obligatorio")
    private String nom;

    @NotBlank(message = "El mail es obligatorio")
    private String email;

    @NotBlank(message = "La contraseña es obligatoria")
    private String pwd;

    private List<Articles> llista_articles_creats;
    private List<Llistes> llistes_creades;

    public UsuariDTO() {
    }

    public UsuariDTO(int id, String nom, String email, String pwd, List<Articles> llista_articles_creats, List<Llistes> llistes_creades) {
        this.nom = nom;
        this.email = email;
        this.pwd = pwd;
        this.llista_articles_creats = llista_articles_creats;
        this.llistes_creades = llistes_creades;
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

}
