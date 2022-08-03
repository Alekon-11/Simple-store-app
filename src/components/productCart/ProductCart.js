import './productCart.css';

import CartListItem from '../cartListItem/CartListItem';
import { Component } from 'react';

class ProductCart extends Component{
    
    componentDidUpdate(prevProps){               // тут я отлавливаю ОБНОВЛЕНИЕ именно в том блоке, в котором должно происходить изменение ( корзина товаров )
        prevProps.cartData.forEach(item => {     // после чего прохожусь по каждому елементу массива
            if(item.quantity <= 0){              // Если при обновлении будет замечен компанент карточки товара, в котором количество (quantity) равно 0, то
                this.props.onDelete(item.id);    // будет применена функция onDelete(id) которая приходит из родительского компанента App
            }
        })
    }

    render(){
        const {cartData, onDelete, onPlus, onMinus, onUpdateQuantity} = this.props;

        const list = cartData.map(item => {
            let {id, ...props} = item;
    
            return <CartListItem onMinus={() => onMinus(id)} 
                                 onPlus={() => onPlus(id)} 
                                 onDelete={() => onDelete(id)}
                                 onUpdateQuantity={onUpdateQuantity} 
                                 id={id}
                                 key={id} 
                                 {...props}/>
        });
    
        const total = cartData.length ? cartData.map(item => item.quantity * item.price).reduce((sum, current) => sum + current) : 0
    
        return(
            <main className="section cart">
                <h2 className="section__title">Корзина</h2>
                <ul className="cart__list">
                    {list}
                </ul>
                <form action="#" className='cart__total'>
                    итого <span>₽ {total}</span>
                    <button type='submit' className="cart__btn">Перейти к оформлению</button>
                </form>
            </main>
        );
    }
}

export default ProductCart;

