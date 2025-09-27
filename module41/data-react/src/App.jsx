import './App.css'
import { Suspense } from 'react'
import Bottles from './components/Bottles/Bottles'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      
      <Suspense fallback={<div>Loading Bottles...</div>}>
        <Bottles />
      </Suspense>
    </>
  )
}

export default App
