import TablazatModell from "../model/tablazatModell.js";
import Tablazat from "../view/tablazat.js";

export default class TablazatController{
    constructor(){
        this.tablaModell = new TablazatModell;
        const lista = this.tablaModell.getList();
        this.tablazatView = new Tablazat(lista, $(".tarolo"));
        this.torolEsemeny();
    }

    torolEsemeny(){
        $(window).on('torol', (event)=>{
            console.log(event.detail);
            let torolt = event.detail.id;
            this.tablaModell.torles(torolt);
            const lista = this.tablaModell.getList();
            this.tablazatView = new Tablazat(lista, $(".tarolo") )

        })
    }
}