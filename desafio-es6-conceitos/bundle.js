"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// 1st exercise
// class
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, password) {
    var admin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Usuario);

    this.email = email;
    this.password = password;
    this.admin = admin;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, password) {
    _classCallCheck(this, Admin);

    return _super.call(this, email, password, true);
  }

  return Admin;
}(Usuario);

var user = new Usuario('email@teste.com', 'senha123');
var admin = new Admin('email@teste.com', 'senha123');
console.log(user.isAdmin()); // false

console.log(admin.isAdmin()); // true
// 2nd exercise
// array methods

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var ageUsers = usuarios.map(function (user) {
  return user.idade;
});
console.log(ageUsers);
var usersRocketseat18YearsOld = usuarios.filter(function (user) {
  return user.idade >= 18 && user.empresa === "Rocketseat";
});
console.log(usersRocketseat18YearsOld);
var googleEmployer = usuarios.find(function (user) {
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

function multiplyAge(user) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  user.idade *= 2;
  return user;
}

;

function filterMaxYearsOld(user) {
  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  return user.idade <= 50;
}

;
var joinOperations = usuarios.map(multiplyAge).filter(filterMaxYearsOld);
console.log(joinOperations); // 3rd exercise
// Converter em arrow functions
// 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
var arrplus10other = arr.map(function (item) {
  return item + 10;
});
var arrplus10 = arr.map(function (item) {
  return item + 10;
});
console.log(arrplus10other);
console.log(arrplus10); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};
/*
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
*/

var mostraIdade = function mostraIdade() {
  return usuario.idade;
};

var mostraIdade2 = function mostraIdade2() {
  return usuario.idade;
};

var mostraIdade3 = function mostraIdade3() {
  return {
    usuario: usuario
  };
}; // <- precisa ter os parâmetros quando é objeto


var mostraIdade4 = function mostraIdade4() {
  return {
    idade: '45'
  };
};

console.log(mostraIdade(usuario));
console.log(mostraIdade2(usuario));
console.log(mostraIdade3(usuario));
console.log(mostraIdade4(usuario)); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;
var outro = "eh mesmo";

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

console.log(mostraUsuario(nome, idade));
mostraUsuario(nome);

var mostraUsuario2 = function mostraUsuario2(nome, idade) {
  return {
    nome: nome,
    idade: idade
  };
};

var mostraUsuario3 = function mostraUsuario3(idade) {
  return {
    idade: idade
  };
};

var mostraUsuario4 = function mostraUsuario4() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return {
    args: args
  };
};

console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario3(idade));
console.log(mostraUsuario4(nome, idade, outro)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var promise2 = function promise2() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise);
console.log(promise2); // 4rd exercise
// 4.1: Desestruturação simples

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
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

var x,
    y = function y(arrayy) {
  return x;
},
    rest;

console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
// 5.1 Spread

usuario = (_readOnlyError("usuario"), {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}); // 6th exersice
// Template Literals

usuario = (_readOnlyError("usuario"), 'Diego');
idade = (_readOnlyError("idade"), 23);
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos'); // 7th exersice
// Object Short Syntax

nome = (_readOnlyError("nome"), 'Diego');
idade = (_readOnlyError("idade"), 23);
usuario = (_readOnlyError("usuario"), {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
});
