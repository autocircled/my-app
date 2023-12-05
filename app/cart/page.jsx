
"use client"
import PageBreadCrumb from "../ui/pageBreadCrumb/pageBreadCrumb"
import PageTitle from "../ui/pageTitle/pageTitle"
import { useStoreCtx  } from "../ctxAndProvider/ctxAndProvider"

const Cart = () => {
    const pageName = "Cart"

    // console.log(useStoreContext());

    // const {msg , loading} = useGlobalCtx() 

    console.log(useStoreCtx());

    return (
        <div>
            <PageBreadCrumb breacrumb__option={pageName} />
            <PageTitle title={pageName} />
        </div>
    )
}

export default Cart