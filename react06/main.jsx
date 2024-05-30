function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  console.log(isLogin);
  const st1 = { color: 'red', border: '1px solid lime', background: 'violet'}
  const st2 = { color: 'lime', border: '1px solid pink', background: 'coral'}
  return (
    <div className="app">
      <h1 style={ isLogin ? st1 : st2}>Codecamp react06</h1>
      {/* <h1 style={{ color : isLogin ? 'violet' : '' }}>Codecamp react06</h1> */}
      <hr />
      <LoginPanel isLogin={isLogin} setIsLogin={setIsLogin} />
      {/* LoginPanel({ isLogin : isLogin, SetIsLogin: SetIsLogin}) */}
      <hr />
      <Greeting isLogin={isLogin} />
    </div>
  );
}

function LoginPanel({ setIsLogin, isLogin }) {
  const hdlClick = () => {
    setIsLogin((prv) => !prv);
  };

  // const loginStyle = isLogin ? 'login-panel login' : 'login-panel'
  return (
    <div className={`login-panel ${isLogin ? 'login' : ''} `}>
      <button onClick={hdlClick}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  );
}

function Greeting({ isLogin }) {
  return (
    <>
      { isLogin && <h1>Hello, User</h1> }
      { !isLogin && <h1>Hello, Guest</h1> }
    </>
  )
}

// function Greeting({ isLogin }) {
//   return (
//     <>
//       {/* <h1>Hello, {isLogin? 'User' : 'Guest'}</h1> */}
//       {isLogin ? <h1>Hello, User</h1> : <h3>Please Login</h3>}
//     </>
//   );
// }

// function Greeting({isLogin}) {
//   if (isLogin) {
//     return <h1>Hello, User</h1>
//   }
//   return <h1>Hello, Guest</h1>
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
