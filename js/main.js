const butao = document.getElementById('butao');
function responsive(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
butao.addEventListener('click', responsive)
