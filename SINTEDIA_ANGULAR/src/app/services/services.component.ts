import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../model/Articles';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicesComponent {

  articleURL= 'http://localhost:8080' + '/articles/latest20art'; 
  //articleURL= 'http://localhost:8080' + '/articles/latest20art'; 

  constructor(private httpClient: HttpClient){}

  public list(): Observable<Articles[]>{
    return this.httpClient.get<Articles[]>(this.articleURL);
  }
}
