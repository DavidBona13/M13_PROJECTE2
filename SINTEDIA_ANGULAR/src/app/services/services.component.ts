import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../model/Articles';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicesComponent {

  private articleURL= 'http://localhost:8080/articles/latest20art'; 
  private articleURLid= 'http://localhost:8080/articles/articleId'; 
  private articleTitol = 'http://localhost:8080/articles/articleTitol';
  private subcategoriaURL = 'http://localhost:8080/articles/subcategoria';

  constructor(private httpClient: HttpClient){}

  public list(): Observable<Articles[]>{
    return this.httpClient.get<Articles[]>(this.articleURL);
  }

  public artId(id: number): Observable<Articles>{
    //return this.httpClient.get<Articles>(`${this.articleURLid}/${id}`);
    return this.httpClient.get<Articles>(this.articleURLid + `/${id}`);
  }

  public getArtTitol(titol: string): Observable<Articles>{
    return this.httpClient.get<Articles>(this.articleTitol + `/${titol}`);
  }

  public getSubcategorias(subcategoria: string): Observable<Articles[]>{
    return this.httpClient.get<Articles[]>(this.subcategoriaURL + `/${subcategoria}`);
  }


}
