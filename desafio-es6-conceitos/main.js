// 1st exercise
// class

class Usuario {
    constructor(email, password, admin = false) {
        this.email = email;
        this.password = password;
        this.admin = admin;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, password) {
        super(email, password, true);
    }    
}


const user = new Usuario('email@teste.com', 'senha123');
const admin = new Admin('email@teste.com', 'senha123');

console.log(user.isAdmin()) // false
console.log(admin.isAdmin()) // true



// 2nd exercise
// array methods

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

var ageUsers = usuarios.map(function(user) {
    return user.idade;
});

console.log(ageUsers);

var usersRocketseat18YearsOld = usuarios.filter(function(user) {
    return user.idade >= 18 && user.empresa === "Rocketseat";
});

console.log(usersRocketseat18YearsOld);


var googleEmployer = usuarios.find(function(user) {
    return user.empresa === "Google";
});

console.log(googleEmployer);

function checkExistenceGoogleEmployer(user) {
    return user.empresa === "Google";
}

var googleEmployer = usuarios.find(checkExistenceGoogleEmployer);

console.log(googleEmployer);

/*
var joinOperations = usuarios.map(function(user) {
    user.idade *= 2;
    return user;
}).filter(function(user) {
    return user.idade <= 50;
})

console.log(joinOperations);
*/

// exercises with separately functions

function multiplyAge(user, factor = 2) {
    user.idade *= 2;
    return user;
};

function filterMaxYearsOld(user, age = 50) {
    return user.idade <= 50;
};

var joinOperations = usuarios.map(multiplyAge).filter(filterMaxYearsOld);

console.log(joinOperations);


// 3rd exercise
// Converter em arrow functions

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

var arrplus10other = arr.map(item => {
    return item + 10;
});

var arrplus10 = arr.map(item => item + 10);


console.log(arrplus10other);
console.log(arrplus10);


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
/*
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
*/

const mostraIdade = () => usuario.idade;

const mostraIdade2 = () => { 
    return usuario.idade;
};

const mostraIdade3 = () => ({ usuario }); // <- precisa ter os parâmetros quando é objeto

const mostraIdade4 = () => ({ idade: '45'});

console.log(mostraIdade(usuario));
console.log(mostraIdade2(usuario));
console.log(mostraIdade3(usuario));
console.log(mostraIdade4(usuario));




// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const outro = "eh mesmo";
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
mostraUsuario(nome);

const mostraUsuario2 = (nome, idade) => ({nome, idade });
const mostraUsuario3 = (idade) => ({ idade });
const mostraUsuario4 = (...args) => ({ args });

console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario3(idade));
console.log(mostraUsuario4(nome, idade, outro));


// 3.4
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}

const promise2 = () => new Promise(function(resolve, reject) {
    return resolve();
});


console.log(promise);
console.log(promise2);



// 4rd exercise

// 4.1: Desestruturação simples

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

/*
const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
*/


// 5th exercise

// 5.1 Rest

arrayy = [1, 2, 3, 4, 5, 6];

var x, y = arrayy => x, rest;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


// 5.1 Spread

usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };



// 6th exersice
// Template Literals

usuario = 'Diego';
idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');



// 7th exersice
// Object Short Syntax

nome = 'Diego';
idade = 23;
usuario = {
    nome: nome,
    idade: idade,
    cidade: 'Rio do Sul',
};