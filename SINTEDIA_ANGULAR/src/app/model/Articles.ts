export class Articles {
    id!: number;
    titol: string;
    descripcio: string;
    autor: string;
    date: string;
    categoria: string;
    subcategoria: string;

    constructor(titol: string, descripcio: string, autor: string, date: string, categoria: string, subcategoria: string){
        this.titol = titol;
        this.descripcio = descripcio;
        this.autor = autor;
        this.date = date;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
    }

}
