export class Llistes {
    id: number;
    nomLlista: string;
    listaArticles: Array<number>;
    id_user: number;

    constructor(id: number, nomLlista: string, listaArticles: Array<number>, id_user: number) {
        this.id = id;
        this.nomLlista = nomLlista;
        this.listaArticles = listaArticles;
        this.id_user = id_user;
    }
}
