import { Component } from 'react';

import ProductListItem from '../productListItem/ProductListItem';

import './productList.css';

class ProductList extends Component{

    onPutItemInCart = (id) => {
        const newItem = this.props.data.filter(item => item.id === id)
        newItem[0].quantity = 1;
        this.props.onSetCartItem(...newItem);
    }

    render(){
        const {title, data} = this.props;
        
        const list = data.map(item => {
            let {id, ...props} = item;

            return <ProductListItem onPutItemInCart={() => this.onPutItemInCart(id)} key={id} {...props}/>
        })

        return (
            <section className="section products">
                <h2 className="section__title">{title}</h2>
                <ul className='products__list'>
                    {list}
                </ul>
            </section>
        );
    };
}

export default ProductList;