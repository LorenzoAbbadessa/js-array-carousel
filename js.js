let percorso = [
    "consegna/img/01.webp",
    "consegna/img/02.webp",
    "consegna/img/03.webp",
    "consegna/img/04.webp",
    "consegna/img/05.webp"
]

for (let i = 0; i < percorso.length; i++) {

	immagine = `<img class="img" src="${percorso[i]}"></img>`;
	document.getElementById("container").innerHTML += immagine;
}



const immagini = document.getElementsByClassName("img");
let imgPrima = 0;
const imgUltima = percorso.length - 1;
immagini[imgPrima].classList.add("visibile");




document.getElementById("btnDx").addEventListener("click", function () {

	if (imgPrima < imgUltima) {
		//rimuovo la visibilità sull'immagine attuale
		immagini[imgPrima].classList.remove("visibile");

		//aggiorno il contatore dell'immagine attuale
		imgPrima++;

		//aggiungo la visibilità sulla prossima immagine
		immagini[imgPrima].classList.add("visibile");
	
    }
    

});

document.getElementById("btnSx").addEventListener("click", function () {
	if (imgPrima > 0) {
		//rimuovo la visibilità sull'immagine attuale
		immagini[imgPrima].classList.remove("visibile");

		//aggiorno il contatore dell'immagine attuale
		imgPrima--;

		//aggiungo la visibilità sulla prossima immagine
		immagini[imgPrima].classList.add("visibile");
	}
});
