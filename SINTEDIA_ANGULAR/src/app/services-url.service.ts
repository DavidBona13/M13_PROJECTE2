import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './model/Articles';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesURLService {

  //SERVICES ARTICLES
  private articleURL= 'http://localhost:8080/articles/latest20art'; 
  private articleURLid= 'http://localhost:8080/articles/articleId'; 
  private subcategoriaURL = 'http://localhost:8080/articles/subcategoria';
  private categoriaURL = 'http://localhost:8080/articles/getEmpreses';
  private articleTitol = 'http://localhost:8080/articles/articleTitol';
  private deleteArt = 'http://localhost:8080/articles/deleteArticle'

 //SEVECIES USUARIS
 private userAdd = 'http://localhost:8080/articles/insertarUser';
 private userLogin = 'http://localhost:8080/articles/login';
 


  //SERVICES LLISTES
  private llistesURL = 'http://localhost:8080/listas/getAllLista';
  private llistesId = 'http://localhost:8080/listas/GetById/';
  private llistesAdd = 'http://localhost:8080/listas/addLlista';
  private llistesAddArticle = 'http://localhost:8080/listas//addArtToList/';

  constructor(private httpClient: HttpClient){}

  public list(): Observable<Articles[]>{
    return this.httpClient.get<Articles[]>(this.articleURL);
  }

  public artId(id: number): Observable<Articles>{
    //return this.httpClient.get<Articles>(`${this.articleURLid}/${id}`);
    return this.httpClient.get<Articles>(this.articleURLid + `/${id}`);
  }
  
  public artCategoria(): Observable<Articles[]> {
    return this.httpClient.get<Articles[]>(this.categoriaURL);
  }

  public getArtTitol(titol: string): Observable<Articles>{
    return this.httpClient.get<Articles>(this.articleTitol + `/${titol}`);
  }

  public getSubcategorias(subcategoria: string): Observable<Articles[]>{
    return this.httpClient.get<Articles[]>(this.subcategoriaURL + `/${subcategoria}`);
  }

  public deleteArticle(id: number): Observable<Articles>{
    return this.httpClient.delete<Articles>(this.deleteArt + `/${id}`);
  }

  public addUser(user: any): Observable<any>{
    return this.httpClient.post<any>(this.userAdd, user);
  }

  public iniciSesio(email: string, pwd: string): Observable<any> {
    const loginRequest = { email, pwd };
    return this.httpClient.post<any>(this.userLogin, loginRequest);
  }


}
