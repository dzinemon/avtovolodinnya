import Nav from '../components/nav'
import Breadcrumbs from '../components/breadcrumbs'
import Footer from '../components/footer'

function Layout(props) {
  return (
    <>
    <Nav />
    <Breadcrumbs />
    { props.children }
    <Footer manufacturers={props.manufacturers} models={props.models}/>
    </>
  )
}

export default Layout