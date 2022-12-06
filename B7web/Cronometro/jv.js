let timer;

function comecar(){
 timer = setInterval(showTime, 1000);
}
function parar(){
    clearInterval(timer);
    
 
}


function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let mili = d.getMilliseconds();
    let txt = +m+':'+s+':'+mili;

    document.querySelector('.demo').innerHTML = txt;
}
function zerar(){
    document.querySelector('.demo').innerHTML = '0:0:0';
    clearInterval(timer);
}


