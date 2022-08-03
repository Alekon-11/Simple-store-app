import './mainContent.css';
import ProductList from '../productList/ProductList';

function MainContent({data, onSetCartItem}){
    return (
        <main className="main">
            <ProductList onSetCartItem={onSetCartItem} title={'Наушники'} data={data.earphones}/>
            <ProductList onSetCartItem={onSetCartItem} title={'Беспроводные наушники'} data={data.wirelessEarphones}/>
        </main>
    )
}

export default MainContent;