function gerar(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(correto){
        return correto.json();
    })
    .then(function(json){
        document.getElementById('quantos').innerHTML = json.length+ 'post';
    })

    .catch(function(error){
        console.log('Algo deu errado ! ! ')
    })
}