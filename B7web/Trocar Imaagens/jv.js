function Trocar(veiculosfile, veiculo){
    document.querySelector('.imagens').setAttribute('src', 'imagens/' + veiculosfile)

    document.querySelector('.imagens').setAttribute('veiculo', veiculo);
}

function QualVeiculo(){
    let veiculos = document.querySelector('.imagens').getAttribute('veiculo');

    alert(veiculos)
}