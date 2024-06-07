import { Articles } from "./Articles";
import { Llistes } from "./Llistes";

export class Usuario {
    id: number;
    nom: string;
    email: string;
    pwd: string;
    llista_articles_creats?: Articles[];
    llistes_creades?: Llistes[];

    constructor(id:number,nom:string,email:string, pwd:string, llista_articles_creats?: Articles[], llistes_creades?: Llistes[]){
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.pwd = pwd;
        this.llista_articles_creats = llista_articles_creats;
        this.llistes_creades = llistes_creades;
    }
}