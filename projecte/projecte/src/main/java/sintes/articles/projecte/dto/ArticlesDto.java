package sintes.articles.projecte.dto;

import jakarta.validation.constraints.NotBlank;

public class ArticlesDto {

    @NotBlank(message = "El título es oblgatorio")
    private String titol;

    @NotBlank(message = "La descripción es obligatoria")
    private String descripcio;

    @NotBlank(message = "El autor es obligatorio")
    private String autor;

    @NotBlank(message = "La fecha es obligatoria")
    private String date;

    @NotBlank(message = "La categoria es obligatoria")
    private String categoria;

    private String subcategoria;

    private int id_user;


    public ArticlesDto() {

    }

    public ArticlesDto(String titol, String descripcio, String autor, String date, String categoria, String subcategoria) {
        this.titol = titol;
        this.descripcio = descripcio;
        this.autor = autor;
        this.date = date;
        this.categoria = categoria;
        this.subcategoria = "";
    }

    public String getTitol() {
        return titol;
    }

    public void setTitol(String titol) {
        this.titol = titol;
    }

    public String getDescripcio() {
        return descripcio;
    }

    public void setDescripcio(String descripcio) {
        this.descripcio = descripcio;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getSubcategoria() {
        return subcategoria;
    }

    public void setSubcategoria(String subcategoria) {
        this.subcategoria = subcategoria;
    }

    public int getId_user(){
        return id_user;
    }

    public void setId_user(int id_user){
        this.id_user = id_user;
    }
}

