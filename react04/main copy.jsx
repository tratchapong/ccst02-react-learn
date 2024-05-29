function App() {
  return (
    <>
    <h1>State with object / array</h1>
    <hr />
    {Car({a: 22, b:99})}
    <Car a='55' b='Hello' />
    </>
  )
}

function Car(props) {
  console.log(props.a)
  console.log(props.b)
  const [car, setCar] = React.useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = (newColor) => {
    // setCar( prv => {
    //   return { ...prv, color: newColor }
    // })

    setCar( prv => ({ ...prv, color: newColor}) )

    // let newCar = {...car}
    // newCar.color = newColor
    // setCar(newCar)
  }

  return (
    <div className="car">
      <h2>Brand : {car.brand}</h2>
      <h2>Model : {car.model}</h2>
      <h1>Color : {car.color}</h1>
      <button onClick={()=>updateColor('red')}>red</button>
      <button onClick={()=>updateColor('blue')}>blue</button>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)