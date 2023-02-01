// Ativar Link Menu
const links = document.querySelectorAll('.header-menu a')

function ativarLinks(link){
    if (location.href.includes(link.href)){
        link.classList.add('ativo')
    }
}
links.forEach(ativarLinks);

// Ativar items do Orçamento

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)
    if(elemento){
        elemento.checked = true
    }
}

parametros.forEach(ativarProduto)

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const respota = document.getElementById(controls)

    respota.classList.toggle('ativa')
    pergunta.setAttribute('aria-expanded',respota.classList.contains('ativa'))
}


function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

// Galeria de Bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarimagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches
    if (media){
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img){
    img.addEventListener('click',trocarimagem)
}
galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime){
    new SimpleAnime();
}