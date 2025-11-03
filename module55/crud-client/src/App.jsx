import './App.css'
import Users from './components/Users.jsx';

const userPromise = fetch('http://localhost:3000/users').then(response => response.json());

function App() {

  return (
    <>      
      <h1 className='text-6xl text-center my-20 font-semibold'>Simple CRUD Operations</h1>
      <Users userPromise={userPromise} />
    </>
  )
}

export default App
