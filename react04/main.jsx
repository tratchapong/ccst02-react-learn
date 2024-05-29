function App() {
  const [car, setCar] = React.useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const [list, setList] = React.useState([
    'truck',
    'e-car',
    'hybrid',
    'hrv'
  ])

  const updateColor = (newColor) => {
    setCar( prv => ({ ...prv, color: newColor}) )
  }
  return (
    <>
    <h1>State with object / array</h1>
    <hr />
    <YearDisplay year={car.year}/>
    <hr />
    <Car carData = {car} title='All Cars' updateColor={updateColor}/>
    <hr />
    <div>
      { list.map(el=>{
        return <button key={el} onClick={()=>alert(el.toUpperCase())}>{el}</button>
      } )}
    </div>

    </>
  )
}

function Car({carData, title, updateColor}) {
  console.log(carData)
  console.log(title)

  return (
    <div className="car">
      <p>{title}</p>
      <h2>Brand : {carData.brand}</h2>
      <h2>Model : {carData.model}</h2>
      <h1>Color : {carData.color}</h1>
      <button onClick={()=>updateColor('red')}>red</button>
      <button onClick={()=>updateColor('blue')}>blue</button>
    </div>
  )
}

function YearDisplay({year}) {
  return (
    <h1>Year : {year}</h1>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)