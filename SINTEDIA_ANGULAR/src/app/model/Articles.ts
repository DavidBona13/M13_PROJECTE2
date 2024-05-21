export class Articles {
    id: number;
    titol: string;
    descripcio: string;
    autor: string;
    date: string;
    categoria: string;
    subcategoria: string;
    id_user: number;
    imgURL: string;
    imgSubcategoria: string;

    constructor(id: number, titol: string, descripcio: string, autor: string, date: string, categoria: string, subcategoria: string, id_user: number, imgURL: string, imgSubcategoria: string){
        this.id = id;
        this.titol = titol;
        this.descripcio = descripcio;
        this.autor = autor;
        this.date = date;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.id_user = id_user;
        this.imgURL = imgURL;
        this.imgSubcategoria = imgSubcategoria;
    }

}
