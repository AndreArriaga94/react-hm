import logo from './logo.svg';
// import './App.css';
import './main.css'

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}

const estilo = ({bg = '#333'}) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

const Li = ({children}) => {

  return (
    // <li style={estilo({bg:'#057'})} className='clase-li'>{children}</li>
    <li className='clase-li'>{children}</li>
  )
}

const App = () => {
  const valor = "Feliz"
  return(
    // <ul style={{...estilo2, ...estilo({bg:'#799'})}} className='clase-css'>
    <ul className='clase-css'>
      <Li estado="Feliz">
      valor de li
      </Li>
    </ul>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
