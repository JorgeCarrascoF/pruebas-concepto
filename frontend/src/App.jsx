import { useState } from 'react'
import './App.css'
import ErrorButton from './components/ErrorButton'
import GetLogsButton from './components/GetLogsButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Proyecto para pruebas de concepto</h1>
      <div className="card">
        <button onClick={() => console.log(count[id])}>
          count is {count}
        </button>
        <ErrorButton />
        <GetLogsButton />
      </div>

    </>
  )
}

export default App
