import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    // variavel de estado
    state = {
        products: [],
        productInfo: {},
        page: 1 
    }


    // metodo que é executado assim que o componente for mostrado em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page =  1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        //console.log(response.data.docs);

        // this.setState({ products: response.data.docs })
        this.setState({ products: docs, productInfo, page })
    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return; // verifica se é a ultima pagina

        const pageNumber = page - 1;

        this.loadProducts(pageNumber)
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return; // verifica se é a ultima pagina

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    }
    
    render() {
        const { products, page, productInfo } = this.state; //desestruturacao
    return (
        <div className="product-list">
            {  products.map(product =>(
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href="">Acessar</a>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
            </div>
        </div>
    )
    
        //return <h1>Contagem de produtos: { this.state.products.length }</h1>;
    };
};