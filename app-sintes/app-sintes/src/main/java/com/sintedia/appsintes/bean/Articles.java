package com.sintedia.appsintes.bean;


import jakarta.validation.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "articles")
public class Articles {

    @Id
    private int id;

    private String titol;

    private String descripcio;

    private String autor;

    private String date;

    private String categoria;

    private String subcategoria;


    public Articles() {

    }

    public Articles(int id, String titol, String descripcio, String autor, String date, String categoria, String subcategoria) {
        this.id = id;
        this.titol = titol;
        this.descripcio = descripcio;
        this.autor = autor;
        this.date = date;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "Articles{" +
                "id=" + id +
                ", titol='" + titol + '\'' +
                ", descripcio='" + descripcio + '\'' +
                ", autor='" + autor + '\'' +
                ", date='" + date + '\'' +
                ", categoria='" + categoria + '\'' +
                ", subcategoria='" + subcategoria + '\'' +
                '}';
    }
}
