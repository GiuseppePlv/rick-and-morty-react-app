import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './components/Characters';
import AppRouter from './router/app.router';
function App() {

  return (
    <>
      <div className="bg-white p-5">
        <h1 className='rickH'>The Rick and Morty API</h1>
        <br></br>
        <br></br>

        <div className="container">
          <AppRouter></AppRouter>
        </div>
      </div>
    </>
  )
}

export default App
