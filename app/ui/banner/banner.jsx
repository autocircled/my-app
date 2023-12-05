import React from 'react'
import banner__img from '../../../public/assets/images/banner-art.svg'
import Image from 'next/image'
import './banner.css'

const banner = () => {
    return (
        <div className='banner__main'>

            <div className="inner__container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 banner__text">
                            <h1>Buy Premium Software Licenses</h1>
                            <p>Buy Premium Software online with 1 Year Warranty and FREE Support.</p>
                        </div>
                        <div className="col-sm-6">
                            <Image src={banner__img}
                                alt="banner-image"
                                style={{ width: "100%", height: "auto" }}
                            // sizes="(max-width:575px) 5vw"
                            />
                            {/* <img src={banner__img} alt="" /> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default banner