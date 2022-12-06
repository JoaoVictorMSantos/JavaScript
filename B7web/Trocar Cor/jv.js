function preto(){
    document.querySelector('.main').classList.add('preto');

    /*Remover cor*/ 

    document.querySelector('.main').classList.remove('red');
    document.querySelector('.main').classList.remove('blue');
}

function red(){
    document.querySelector('.main').classList.add('red');
    /*remover cor*/ 

    document.querySelector('.main').classList.remove('blue')
    document.querySelector('.main').classList.remove('preto')
}

function blue(){

document.querySelector('.main').classList.add('blue');
/*Para remover a cor */

document.querySelector('.main').classList.remove('preto');
document.querySelector('.main').classList.remove('red');

}