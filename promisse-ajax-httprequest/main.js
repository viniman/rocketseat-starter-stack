// AJAX  é uma requisição assíncrona que realiza em algum backend
// Em vez de recarregar a página para trazer novas informações do servidor
// Conseguimos usar o AJAX, para requisitar informações do servidor
// sem precisar recarregar a página


// https://developer.github.com/v3/


var myPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/viniman');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState ===4 ) {
                if(xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });

}


myPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });

