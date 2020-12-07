function CarCardImage(props) {

  const { imageSrc, imageAlt } = props

  return (
    <img alt={imageAlt}
      className="w-full h-32 md:h-40 object-contain object-center" 
      src={`${imageSrc}?nf_resize=fit&w=320&h=160`}
      >
    </img>
  )

}

export default CarCardImage