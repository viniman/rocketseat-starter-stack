alert('oi teste');


class List {
    constructor () {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}



class TodoList extends List{
    constructor() {
        super();

        this.usuario = 'Viniman';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();


document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();


import soma, { multiply, sub as sub_function_renomeada } from './functions';
import soma_default_pode_nome_diferente from './soma';
import * as functions from './functions';

console.log(soma(1,2));
console.log(sub_function_renomeada(4,2));
console.log(soma_default_pode_nome_diferente(4,2));
console.log(multiply(4,2));
console.log(functions)
console.log(functions.sub(1,2))




const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 0); // 2000 -> troquei para 0 para nao esperar
});


/*
myPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
*/


// Utilizando a Sintaxe do Async/await

async function executePromise() {
    //const response = await myPromise();
    //console.log(response);

    console.log(await myPromise()); // a proxima linha só executa depois que a anterior terminar
    console.log(await myPromise());
    console.log(await myPromise());

    
}

executePromise();



// Também pode usar com arrow function

const executePromiseArrowFunction = async () => {
    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
};





// axios.get e todas as funcoes do axios retornam promises

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`); // template literals
            
            console.log(response);
        } catch (err) {
            console.warn(err);
            console.warn('Erro na API');
        }
    }
}


console.log(Api.getUserInfo('viniman'));
console.log(Api.getUserInfo('viniman3'));