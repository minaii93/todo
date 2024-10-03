import { termekLista } from "./adatok.js";

export default class TablazatModell{
    #lista = [];
    constructor(){
        this.#lista= termekLista;


    }

    getList(){
        return this.#lista;
    }

    torles(index){
        this.#lista.splice(index, 1);
    }
}