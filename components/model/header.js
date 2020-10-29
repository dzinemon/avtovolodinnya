const { default: Manufacturer } = require("../../pages/[manufacturer]")

function ModelHeader(props) {
  const { manufacturer, 
          model, 
          designation, 
          price } = props
  return (
    <div className="xl:container mx-auto px-4 mb-3">
      <div className="my-4">
        <h1 className="font-semibold text-base sm:text-2xl text-gray-700">
          Вартість володіння 
          <span> {manufacturer.toUpperCase()} </span>
          <span> {model.replace('_', ' ').toUpperCase()} </span>
          <span> {designation} </span>
          {/* <span className=""> {props.configuration}</span> */}
          {/* <span className=""> {props.horsepower} к.с.</span> */}
          <span> за <strong>5</strong> років</span>
        </h1>
      </div>
    </div>
  )
}

export default ModelHeader