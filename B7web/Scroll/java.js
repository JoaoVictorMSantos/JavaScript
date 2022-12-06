function ScrollLow(){
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}
function scrolltoop(){
    if( window.scrollY === 0){
        document.querySelector('.botao').style.display = 'none';
    }else{
        document.querySelector('.botao').style.display = 'block';
    }
}


    window.addEventListener('scroll', scrolltoop);