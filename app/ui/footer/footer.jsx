import './footer.css'

const footer = () => {
    return (
        <div className='footer__main'>
            <div className="container">
                <div className="row footer__row">
                    <div className="col-md col-sm">
                        <div className="footer__box">
                            <div className="footer__heading">
                                Navigation
                            </div>
                            <ul className="footer__menu__navigation">
                                <li>
                                    <a href="#">My Account</a>
                                </li>
                                <li>
                                    <a href="#">Cart</a>
                                </li>
                                <li>
                                    <a href="#">Checkout</a>
                                </li>
                                <li>
                                    <a href="#">Knowledge Base</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md col-sm">
                        <div className="footer__box footer__margin__fix__2">
                            <div className="footer__heading">
                                Categories
                            </div>
                            <ul className="footer__menu__navigation">
                                <li>
                                    <a href="#">operating system</a>
                                </li>
                                <li>
                                    <a href="#">office suites</a>
                                </li>
                                <li>
                                    <a href="#">download managers</a>
                                </li>
                                <li>
                                    <a href="#">data recovery softwares</a>
                                </li>
                                <li>
                                    <a href="#">antivirus</a>
                                </li>
                                <li>
                                    <a href="#">others</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="footer__box footer__margin__fix">
                            <div className="footer__heading">
                                links
                            </div>
                            <ul className="footer__menu__navigation">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">terms & conditions</a>
                                </li>
                                <li>
                                    <a href="#">license key</a>
                                </li>
                                <li>
                                    <a href="#">returns & refund policy</a>
                                </li>
                                <li>
                                    <a href="#">delivery policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md footer__margin__fix">
                        <div className="footer__box">
                            <div className="footer__heading">
                                GenuineLicense.co - Genuine Software Licenses
                            </div>
                            <ul className="footer__menu__navigation">
                                <li>
                                    <a href="#" style={{ textTransform: 'lowercase' }}>support@genuinelicense.store</a>
                                </li>
                                <li>
                                    <a href="#">
                                        No - 152/23, Hong Kong Market, Dimapur, Nagaland – 797113
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="footer__bottom footer__margin__fix">
                            <span>
                                © GenuineLicense.co - Genuine Software Licenses at Cheapest Price 2023
                            </span>
                            <br />
                            <span>
                                <a href="#">Privacy Policy</a>
                                <span> | </span>
                                <a href="#">Built with Storefront & WooCommerce</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer