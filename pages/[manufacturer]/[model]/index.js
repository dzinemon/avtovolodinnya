import { useEffect } from "react"
import Breadcrumbs from '../../../components/breadcrumbs'

function Manufacturer() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ] );

  return (
    <div>
      
      
      <Breadcrumbs />
      
      <div>
        Model page
      </div>
      
    </div>
  )
}

export default Manufacturer