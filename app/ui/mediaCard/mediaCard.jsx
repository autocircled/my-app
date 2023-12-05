import Image from 'next/image'
import './mediaCard.css'
// import image from '../../../public/assets/images/payments_.svg' ; 

const mediaCard = ({ data }) => {
    // console.log(data.image);
    let img = data.image

    // console.log(img);

    return (
        <div className="col-sm-4 ">
            <div className="media__box mt__70 mb__30">
                <div className="media__img">
                    <Image src={img} alt="media__image" width={83} height={65} />
                </div>
                <div className="media__text">
                    <div className="media__heading">
                        {data.title}
                    </div>
                    <div className="media__description">
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mediaCard