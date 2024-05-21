package sintes.articles.projecte.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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

    private int id_user;

    private String imgURL;

    private String imgSubcategoria;



    public Articles() {

    }

    public Articles(int id, String titol, String descripcio, String autor, String date, String categoria, String subcategoria, String imgURL, String imgSubcategoria) {
        this.id = id;
        this.titol = titol;
        this.descripcio = descripcio;
        this.autor = autor;
        this.date = date;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.imgURL = imgURL;
        this.imgSubcategoria = imgSubcategoria;
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

    public int getId_user(){
        return id_user;
    }

    public void setId_user(int id_user){
        this.id_user = id_user;
    }

    public String getImgURL(){
        return imgURL;
    }

    public void setImgURL(String imgURL){
        this.imgURL = imgURL;
    }

    public String getImgSubcategoria() {
        return imgSubcategoria;
    }

    public void setImgSubcategoria(String imgSubcategoria){
        this.imgSubcategoria = imgSubcategoria;
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
                ", id_user=" + id_user + '\'' +
                ", imgURL='" + imgURL + '\'' +
                ", imgSubcategoria='" + imgSubcategoria + '\'' +
                '}';
    }
}
