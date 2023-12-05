
import './loader.css'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <div className='spinner__container'>
            <Spinner animation="grow" variant="info" />
        </div>
    )
}

export default Loader