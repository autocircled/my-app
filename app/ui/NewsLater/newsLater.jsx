import './newsLater.css'
import { BiPaperPlane } from "react-icons/bi";

const newsLater = () => {
    return (
        <div className='newslater__main'>
            <div className="inner__container">
                <div className="container text-center">
                    <div className="row">
                        <div className="newslater__title">
                            <div className="newslater__heading">
                                <h1>KEEP UPDATED & GET UNLIMITED DISCOUNT</h1>
                            </div>

                            <p>Sign for our newsletter to receive updates and exclusive offers</p>
                        </div>
                        <div className="newslater__form">
                            <form>
                                <span className="newslater__name">
                                    <input type="text" placeholder='Full Name' />
                                </span>
                                <span className='newslater__email'>
                                    <input type="email" placeholder='Email Address' />
                                </span>
                                <span className='newslater__submit__button'>
                                    <input type="button" />
                                    <BiPaperPlane />
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newsLater