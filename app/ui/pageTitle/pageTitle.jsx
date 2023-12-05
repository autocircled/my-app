
import './pageTitle.css'

const pageTitle = ({title}) => {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <div className="page__title">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default pageTitle