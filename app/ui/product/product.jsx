import Image from 'next/image';
import './product.css'
import Link from 'next/link';

const product = ({ product }) => {
    return (
        <div className="col-md-4 col-6 product__container__main">
            <div className="product__container text-center">
                <div className="product__img">
                    <Image src={product.images[0].src} style={{ width: "100%", height: "auto" }} width={217} height={217} alt="img" />
                </div>
                <div className="product__desc__box">
                    <div className="product__title">
                        {product.name}
                    </div>
                    <div className="product__price">
                        <del>{product.regular_price}</del>৳&nbsp;<span>{product.sale_price}৳&nbsp;</span>
                    </div>
                    <Link href='/cart' className="product__button">
                        add to cart
                    </Link>
                </div>
                <span className='onsale'>sale!</span>
            </div>
        </div>
    )
}

export default product