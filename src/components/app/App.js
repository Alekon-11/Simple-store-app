import { Component } from 'react';

import Header from '../header/Header';
import MainContent from '../mainContent/MainContent';
import Footer from '../footer/Footer';
import ProductCart from '../productCart/ProductCart';
import jsonData from '../../data.json';

import './app.css';

class App extends Component{
    state = {
        data: jsonData,
        cartItems: [],
        page: null
    }

    componentDidMount(){
        if(!localStorage.getItem('cartItems')){       // Если не будет обнаружен localStorage ключь, то будет добавлен localStorage ключь со значением (пустой массив)
            localStorage.setItem('cartItems','[]');   // но если ключь уже будет в localStorage,то это условие НЕ будет выполнено!
        }
        this.setState({                               // После чего в state будет помещена база данных взятая из localStorage. Все действия происходят при... =>
            cartItems: JSON.parse(localStorage.getItem('cartItems')) // => ...ПЕРВОНОЧАЛЬНОЙ ЗАГРУЗКИ СТРАНИЦЫ так как это componentDidMount();
        })                                                     
    }

    componentDidUpdate(){              // В процессе работы с кодом, state cartItems будет переписываться и эта база будет помещаться в одноименный ключь в localStorage.
        localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));    
    }

    onDelete = (id) => {
        this.setState(({cartItems}) => {
            const updatedList = cartItems.filter(item => item.id !== id);

            return {
                cartItems: updatedList
            }
        })
    }

    onUpdateQuantity = (id, quantity) => {
        this.setState(({cartItems}) => ({
            cartItems: cartItems.map(item => {
                if(item.id === id){
                    return {...item, quantity: quantity};
                }
                return item;
            })
        }))
    }

    onSetCartItem = (item) => {
        this.setState(({cartItems}) => {
            const checkList = cartItems.filter(elem => elem.id !== item.id)
            return {
                cartItems: [...checkList, item]
            }
        })
    }

    onPlus = (id) => {
        this.setState(({cartItems}) => {
            const updateList = cartItems.map(item => {
                if(item.id === id){
                    item.quantity++;
                    return item;
                }
                return item;
            })

            return {
                cartItems: updateList
            }
        })
    }

    onMinus = (id) => {
        this.setState(({cartItems}) => {
            const updateList = cartItems.map(item => {
                if(item.id === id){
                    item.quantity--;
                    return item;
                }
                return item;
            })

            return {
                cartItems: updateList
            }
        })
    }

    togglePage = () => {
        switch (this.state.page) {
            case 'cart':
                return <ProductCart onMinus={this.onMinus} 
                                    onPlus={this.onPlus} 
                                    onDelete={this.onDelete} 
                                    cartData={this.state.cartItems}
                                    onUpdateQuantity={this.onUpdateQuantity}/>;
            case 'favorites':
                return '';
            default:
                return <MainContent onSetCartItem={this.onSetCartItem} data={this.state.data}/>; 
        }
    }

    onSwitchPage = (page) => {
        this.setState({page})
    }

    render(){
        return(
            <div className="app">
                <div className="container">
                    <Header totalCartItem={this.state.cartItems.length} onSwitchPage={this.onSwitchPage} />
                    {this.togglePage()}
                </div>
                <Footer onSwitchPage={this.onSwitchPage} />
            </div>
        )
    }
}

export default App;