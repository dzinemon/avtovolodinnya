import Breadcrumbs from '../components/breadcrumbs'
import Footer from '../components/footer'

function Layout(props) {
  return (
    <>
    <Breadcrumbs />
    { props.children }
    <Footer/>
    </>
  )
}

export default Layout