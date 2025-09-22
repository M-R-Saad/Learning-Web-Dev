import './App.css'
import Counter from './Counter'
import Card from './Card'
import Company from './Company'
import { Suspense } from 'react'


function App() {

  return (
    <>
      <h1>Vite + React</h1>

      <Counter></Counter>
      <Card></Card>

      <Suspense fallback={<h2>Loading Company...</h2>}>
        <Company></Company>
      </Suspense>
    </>
  )
}

export default App
