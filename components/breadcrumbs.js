
import Link from 'next/link'
import { useRouter } from 'next/router'

function Breadcrumbs(props) {

  const router = useRouter();

  const {model, manufacturer} = router.query;

  const ldJSON = `
                    "name": "Avtovolodinnya BreadcrumbList",
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Головна",
                      "item": "https://avtovolodinnya.com/"
                    }
                    ${!model && manufacturer? `,{
                      "@type": "ListItem",
                      "position": 2,
                      "name": "${manufacturer.toUpperCase()}"
                    }` : ''}
                    ${model && manufacturer ? `
                    ,{
                      "@type": "ListItem",
                      "position": 2,
                      "name": "${manufacturer.toUpperCase()}",
                      "item": "https://avtovolodinnya.com/${manufacturer}"
                    }
                    ,{
                      "@type": "ListItem",
                      "position": 3,
                      "name": "${model.toUpperCase()}"
                    }` : ''}]
                  `

  return (
    <div className="xl:container mx-auto my-4">
      <script type="application/ld+json" jsx="true">{ldJSON}</script>

      <div className="sm:text-xs text-sm">
        <Link href="/" ><a className="text-gray-700 hover:text-gray-500">Головна</a></Link>
        <span className="text-gray-400"> / </span> 
        {!model && manufacturer && (
          <>
            <span className="text-gray-700 capitalize">{manufacturer}</span>           
          </>
        )}
        {model && manufacturer && (
          <>
          <Link href={`/${manufacturer}`}><a className="text-gray-700 hover:text-gray-500 capitalize">{manufacturer}</a></Link> 
          <span className="text-gray-400"> / </span>
          <span className="text-gray-700 capitalize">{model.replace('_', ' ')}</span>
          </>
          )} 
      </div>
    </div>
  )
}

export default Breadcrumbs