import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    // variavel de estado
    state = {
        products: []
    }


    // metodo que é executado assim que o componente for mostrado em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        //console.log(response.data.docs);

        this.setState({ products: response.data.docs })
    };
    
    render() {
        const { products } = this.state; //desestruturacao
    return (
        <div className="product-list">
            {  products.map(product =>(
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href="">Acessar</a>
                </article>
            ))}
        </div>
    )
    
        //return <h1>Contagem de produtos: { this.state.products.length }</h1>;
    };
};