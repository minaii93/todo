import Sor from "./sor.js";

export default class Tablazat{
    #lista = [];
    constructor(lista, szuloElem){
        console.log(lista);
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.empty();
        this.tablazatKiir();
        this.tBodyElem = $(".sorok");
        this.sorKiir();
    }

    sorKiir(){
        this.#lista.forEach((elem, index) => {
            elem.id = index;
            new Sor(elem, this.tBodyElem)
        })
    
    }

    tablazatKiir(){
        this.szuloElem.append(`<table class = "table table-striped">
            <thead>
                <tr>
                <th>Elnevezés</th>   
                <th>Leírás</th> 
                <th>Ár</th> 
                       
                
                </tr>
            
            
            </thead>
            <tbody class = "sorok">
            </tbody>
            </table>
            
            `)
    }
}