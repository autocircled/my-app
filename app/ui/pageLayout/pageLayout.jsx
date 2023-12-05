import './pageLayout.css' ; 

const PageLayout = (props) => {
  return (
    <div className='page__body__main'>
        <div className="container">
            {props.children}
        </div>
    </div>
  )
}

export default PageLayout