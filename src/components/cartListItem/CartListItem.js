import { Component } from 'react';

import './cartListItem.css';

class CartListItem extends Component{
    state = {
        quantity: this.props.quantity /* 2. После чего state из Арр записывается в этот state */
    }

    componentDidUpdate(prevProps){    // 4. А так же обязательно прописывается componentDidUpdate(), чтобы state обновлял value при увеличении и уменьшении количества товара
        if(prevProps.quantity !== this.props.quantity){
            this.setState({
                quantity: this.props.quantity
            })
        }
    }

    render(){
        const {naming, price, img, quantity, discount, onDelete, onPlus, onMinus, onUpdateQuantity} = this.props;

        const finalPrice = discount ? Math.trunc(+price / 100 * (100 - +discount)) : +price;

        return(
            <li className="cart__item">
                <button onClick={onDelete} className="cart__item-remove"><img src="resources/icons/close.png" alt="remove product" /></button>
                <div className="cart__item-image"><img src={img} alt="Apple BYZ S852I" /></div>
                <div className="cart__item-naming">{naming}</div>
                <div className="cart__item-price">{finalPrice} ₽</div>
                <div className="cart__item-total">{finalPrice * quantity} ₽</div>
                <div className="count-btns">
                    <button onClick={onMinus} className="count-btns__btn count-btns__btn_minus"></button>
                    <input type="text" 
                           value={this.state.quantity}  /* 3. И после этого передается в сюда, в value*/
                           onChange={(e) => onUpdateQuantity(this.props.id, +e.target.value)} /> {/* 1. Сначала у главного компанента Арр при вводе обновляется state через функцию onUpdateQuantity() */}
                    <button onClick={onPlus} className="count-btns__btn count-btns__btn_plus"></button>
                </div>
            </li>
        );
    }
}

export default CartListItem;