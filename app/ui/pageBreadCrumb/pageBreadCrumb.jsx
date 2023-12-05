
import './pageBreadCrumb.css';
import { BsFillHouseAddFill } from "react-icons/bs";
import Link from 'next/link';


const pageBreadCrumb = ({breacrumb__option}) => {
    return (
        <>
            <div className="breadcrumb__main">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/home"><span className=''><BsFillHouseAddFill /></span> Home</Link></li>
                        <li className="breadcrumb-item " aria-current="page">{breacrumb__option}</li>
                    </ol>
                </nav>
            </div>
        </>
    )
}

export default pageBreadCrumb