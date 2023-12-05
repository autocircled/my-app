import MediaCard from '../mediaCard/mediaCard'
import mediaData from '../../mediaData'
import './media.css'
const media = () => {


    return (
        <div className='media__container'>
            <div className="inner__container">
                <div className="row box">
                    {mediaData.map(data => <MediaCard data={data} key={data.id} />)}
                </div>
            </div>
        </div>
    )
}

export default media