import Product from '../product/product'
import EmptyMessage from '../emptyMessage/emptyMessage'
import './productList.css'

const productList = ({ products }) => {

    if (products.length === 0) {
        return (
            <EmptyMessage title="No products were found matching your selection." />
        )
    }
    return (
        <div className='container'>
            <div className="row">
                {products.map(product => <Product key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default productList