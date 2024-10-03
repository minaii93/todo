export default class Sor{
    #adat = {};
    constructor(adat, szuloElem){ //ezeket adom at a tablazatnak meghiváskor
        console.log(adat);
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.kukaz();
        this.kukaElem = $(".kuka:last"); // hozzáfér a kukához hogy töröljek az eseménykezelővel 
        this.kattintasEsemeny();
    }

    kattintasEsemeny(){
        this.kukaElem.on('click', ()=>{
            console.log(this.#adat);
            const e = new CustomEvent("torol", {detail : this.#adat})
            window.dispatchEvent(e);
        })
    }

    kukaz(){
        this.szuloElem.append(
            `<tr>
                <td>${this.#adat.elnevezes}</td>
                 <td>${this.#adat.leiras}</td>
                  <td>${this.#adat.ar}</td>
                   <td class = "kuka">🗑️</td>
            
            
            </tr>`
        )
    }
}