const butao = document.getElementById('butao');
function responsive(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
butao.addEventListener('click', responsive)

function clique(){
    let element = document.getElementById("modal");
    element.classList.add("show-modal")
    console.log('puta');
}
function tirar(){
    let element = document.getElementById('modal');
    element.classList.remove('show-modal')
}