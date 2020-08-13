// Métodos estáticos;
// Não irá ver nada que está dentro da classe
// É apenas para guardar funções que vão ser utilizadas
// Não precisa depender de nenhuma informação da classe


class Matematica {
    static soma(a,b) {
        return a + b;
    }

    // REST
    static somaTudo(...paramns) {
        return paramns.reduce((total,next) => total + next);
    }
}



console.log(Matematica.soma(1,2));

console.log(somaTudo(5,5,5,5,5)); // 25


// SPREAD

const arr1 = [1, 2, 3];
const arr1 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2];

console.log(arr3);


const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rockseat',
};

const usuario2 = { ...usuario1, nome: 'Viniman'};

console.log(usuario2);


const nome = "Vinicius";
const idade = 23;


console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
// Template Litearals
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);


// Object Short Syntax
const nome = 'Vinicius';
const idade = 23;

/*
const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Rocketseat'
};
*/

// Object Short Syntax não precisa colocar `nome: nome`
const usuario = {
    nome,
    idade,
    empresa: 'Rocketseat'
};

