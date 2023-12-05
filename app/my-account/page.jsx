"use client"
// import { useParams } from "next/navigation";
import PageBreadCrumb from "../ui/pageBreadCrumb/pageBreadCrumb"
import PageTitle from "../ui/pageTitle/pageTitle"
import LoginForm from '../ui/loginForm/loginForm'

const MyAccount = () => {

    const pageName = "My account"
    
    return (
        <div>
            <PageBreadCrumb breacrumb__option={pageName} />
            <PageTitle title={pageName} />
            <LoginForm/>
        </div>
    )
}

export default MyAccount