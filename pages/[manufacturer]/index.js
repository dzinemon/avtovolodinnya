import { useEffect } from "react"

import Breadcrumbs from '../../components/Breadcrumbs'

function Manufacturer() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ] );

  return (
    <div>
      
      
      <Breadcrumbs />
      
      <div>
        Manufacturer page
      </div>
      
    </div>
  )
}

export default Manufacturer