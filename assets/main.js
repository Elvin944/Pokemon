let img = document.querySelector("img");
let next= document.querySelector(".next");

let showPokemon=(function () {
    let src="";
    return x=>{
        if (x<10) {
            src="00" + x;
        }
        else if (x<100) {
            src="0" + x;
        }
        else if (x>905) {
            src=x;
        }
        else{
            src=x;
        }

        img.setAttribute("src",`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${src}.png`)
    }
})()

next.onclick= function () {
    showPokemon(this.getAttribute("next-number"));
    this.setAttribute("next-number",Number(this.getAttribute("next-number"))+1)
}
