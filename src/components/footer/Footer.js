import './footer.css';

function Footer({onSwitchPage}){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <a href=".#" onClick={(e) => onSwitchPage(e.currentTarget.getAttribute('data-page'))} data-page="main" className="logo footer__logo">QPICK</a>
                    <ul className="footer__btns">
                        <li className="footer__btn"><button className='btn-trans' type='button'>Избранное</button></li>
                        <li onClick={(e) => onSwitchPage(e.currentTarget.getAttribute('data-page'))} 
                            data-page="cart"
                            className="footer__btn"><button className='btn-trans' type='button'>Корзина</button></li>
                        <li className="footer__btn"><button className='btn-trans' type='button'>Контакты</button></li>
                        <li className="footer__btn"><button className='btn-trans' type='button'>Условия сервиса</button></li>
                        <li className="footer__lang">
                            <img src="resources/icons/globe.png" alt="" />
                            <ul className="footer__lang-list">
                                <li className="footer__lang-item footer__lang-item_active">Рус</li>
                                <li className="footer__lang-item">Eng</li>
                                <li className="footer__lang-item">Каз</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li className="social-links__item"><a href=".#"><img src="resources/icons/VK.png" alt="vk.com" /></a></li>
                        <li className="social-links__item"><a href=".#"><img src="resources/icons/Telegram.png" alt="telegram" /></a></li>
                        <li className="social-links__item"><a href=".#"><img src="resources/icons/Whatsapp.png" alt="whatsapp" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;