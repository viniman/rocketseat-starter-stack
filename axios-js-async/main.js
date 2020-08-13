// https://github.com/axios/axios
// https://developer.github.com/v3/


// sintaxe para fazer requisição na api fica muito mais fácil com o axios
// Dá para enviar parâmetros da requisição junto
axios.get('https://api.github.com/users/viniman') // get, post, delete ....
    .then(function(response) {
        //console.log(response);
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    });