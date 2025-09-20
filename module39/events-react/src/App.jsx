import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './Users'
import Friends from './Friends'
import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();

  const handleClick = () => {
    alert('Button Clicked!')
  }

  const handleClick2 = (num) => {
    alert(`Button Clicked ${num}!`)
  }

  return (
    <>
      <h3>Vite + React</h3>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2(2)}>Click Me 2</button>

      <Counter />

      <Player />

      <Suspense fallback={<h2>Loading Users...</h2>}>
        <Users users={fetchUsers} />
      </Suspense>

      <Suspense fallback={<h2>Loading Friends...</h2>}>
        <Friends friends={friendsPromise} />
      </Suspense>
    </>
  )
}

export default App
