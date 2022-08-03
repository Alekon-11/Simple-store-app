import './productListItem.css';

function ProductListItem({naming, price, img, rate, onPutItemInCart}){
    return (
        <li className="product-card">
            <img src={img} alt={naming} className="product-card__image" />
            <h4 className="product-card__naming">{naming} </h4>
            <div className="product-card__price">{price} ₽</div>
            <div className="product-card__rate">
                <img src="resources/icons/rate-star.png" alt="rate star" />
                {rate}
            </div>
            <button onClick={onPutItemInCart} className="btn-trans product-card__btn">Купить</button>
        </li>
    )
}

export default ProductListItem;