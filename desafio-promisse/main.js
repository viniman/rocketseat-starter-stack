// AJAX  é uma requisição assíncrona que realiza em algum backend
// Em vez de recarregar a página para trazer novas informações do servidor
// Conseguimos usar o AJAX, para requisitar informações do servidor
// sem precisar recarregar a página


// https://stackoverflow.com/questions/41079410/delays-between-promises-in-promise-chain

function checaIdade(idade) {
    return new Promise( function(resolve, reject) {
        if (idade >= 18) {
            setTimeout(resolve.bind(), 2000);
        } else {
            setTimeout(reject.bind(), 2000);
        }
        }
    );

}

checaIdade(22)
    .then(function() {
        console.log('>>>>> Maior que 18 anos');
        alert('>>>>> Maior que 18 anos');
        
    })
    .catch(function() {
        console.warn('<<<<<< Menor que 18 anos');
        alert('<<<<<< Menor que 18 anos');
    });