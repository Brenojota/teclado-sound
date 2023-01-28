function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert("Elemento não encontado ou seletor inexistente");
    }
}

const listaDeNotas = document.querySelectorAll(".nota");

for(let i=0; i<listaDeNotas.length;i++){

    const tecla = listaDeNotas[i];
    const sound = tecla.classList[1];

    const idAudio = `#som_${sound}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        console.log(evento.code);

        if(evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa');
        }
        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }

    }

}