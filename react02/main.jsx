
function App() {
  const title = (
    <>
      <h2>This is title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa tempora, deleniti velit totam culpa in pariatur hic optio adipisci provident natus ex perferendis maiores voluptatum aspernatur, quibusdam explicabo distinctio?</p>
    </>
  )
  let x=2
  let isLogin = true
  const random1 = () => Math.random()
  const random2 = Math.random()
  const h3Style = {
    textAlign : 'center',
    color: 'red',
  }

  return (
    <div className='app'>
      <h1>Codecamp with React.js</h1>
      {title}
      <h3>{x>3? 'Hello' : 'Hi'}</h3>
      { isLogin ? (
        <p>Welcome User</p>
      ) : (
        <p>Welcome Guest</p>
      ) }

      <h3 style={h3Style}>{random1()}</h3>
      <h3 style={ {color: 'blue', backgroundColor: 'silver'} }>{random2}</h3>
      <h3>{random1()}</h3>
      {/* ถ้าเลข random2 > 0.5 เป็นสีเขียว ถ้าไม่ใช่เป็นสีแดง */}
      <h3 style={ { color : random2 >0.5 ? 'lime' : 'red' } }>{random2}</h3>
      <p className={ random2 > 0.5 ? 'bold' : ''} >Result : {random2}</p>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)