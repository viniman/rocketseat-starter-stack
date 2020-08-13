// Arquivo principal de configuração do webpack


module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], //arquivo principal
    output: { // pra qual arquivo e lugar ele deve enviar o arquivo convertido para js antes do es6
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'// caminho para onde ele dever abrir o servidor da nossa aplicação
    },
    module: {
        rules: [ //como o webpack deve se comportar quando o usuário estiver tentando importar novos arquivo js
            {
                test: /\.js$/, //duas barras siginifica expressão regular e $ significa final, \ barra ao contrario qualquer caractere
                exclude: /node_modules/, // nao quer que o babel execute nenhum arquivo js dentro da pasta node_modules, e sim, somente nos arquivos do projeto
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
}