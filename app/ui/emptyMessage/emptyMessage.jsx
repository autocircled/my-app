
import './emptyMessage.css'

const emptyAlert = ({ title }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="empty__message">
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default emptyAlert