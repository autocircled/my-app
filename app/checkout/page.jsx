
import PageBreadCrumb from "../ui/pageBreadCrumb/pageBreadCrumb"
import PageTitle from "../ui/pageTitle/pageTitle"


const Checkout = () => {

    const pageName = "Checkout"

    return (
        <div>
            <PageBreadCrumb breacrumb__option={pageName} />
            <PageTitle title={pageName} />
        </div>
    )
}

export default Checkout