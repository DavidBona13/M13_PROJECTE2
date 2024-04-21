package com.sintedia.appsintes.dto;

import java.time.LocalDate;

public class ArticlesDto {
    private String titol;

    private String descripcio;

    private String categoria;

    private String subcategoria;

    private String autor;

    private LocalDate date;


    public ArticlesDto() {

    }

    public ArticlesDto(String titol, String descripcio, String categoria, String subcategoria, String autor, LocalDate date) {
        this.titol = titol;
        this.descripcio = descripcio;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.autor = autor;
        this.date = date;
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

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
