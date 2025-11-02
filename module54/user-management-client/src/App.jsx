import './App.css'
import Users from './components/Users.jsx';

const userPromise = fetch('http://localhost:3000/users').then(res => res.json());

function App() {

  return (
    <>
      <h1>User Management Application</h1>
      <Users userPromise={userPromise}></Users>
    </>
  )
}

export default App
