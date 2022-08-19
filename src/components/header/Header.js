import { Component } from 'react';

import './header.css';

class Header extends Component{
    state = {
        favorites: 0,
        cart: 0
    }

    componentDidUpdate(prevProps){
        if(prevProps.totalCartItem !== this.props.totalCartItem){
            this.setState({
                cart: this.props.totalCartItem
            })
        }
    }

    render(){
        let {favorites, cart} = this.state;

        return(
            <header className="header">
                <a onClick={(e) => this.props.onSwitchPage(e.currentTarget.getAttribute('data-page'))} 
                    data-page="main"
                    href='.#' 
                    className="logo header__logo">QPICK</a>
                <div className="header__buttons">
                    <button type='button' className="header__btn header__favorites">
                        <img src="resources/icons/heart.png" alt="favorites" />
                        { favorites ? <div className="counter header__counter">{favorites}</div> : null}
                    </button>
                    <button onClick={(e) => this.props.onSwitchPage(e.currentTarget.getAttribute('data-page'))} 
                            data-page="cart" 
                            type='button' 
                            className="header__btn header__cart">
                        <img src="resources/icons/cart.png" alt="shopping cart" />
                        { cart ? <div className="counter header__counter">{cart}</div> : null}
                    </button>
                </div>
            </header>
        );
    }
    
}

export default Header;