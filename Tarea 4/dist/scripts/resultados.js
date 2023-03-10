// Buscar noticia
document.addEventListener('DOMContentLoaded', () => {
    const verUno = document.getElementById('bt-buscar');
    verUno.addEventListener('click', (el) => {
        console.log('Evento click: ', el);
        const keyWord = document.querySelector('.txt-keyWord').value;
        console.log(keyWord);

    }); 
});