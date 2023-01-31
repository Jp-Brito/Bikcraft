// Ativar Link Menu
const links = document.querySelectorAll('.header-menu a')

function ativarLinks(link){
    if (location.href.includes(link.href)){
        console.log(link.innerHTML)
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