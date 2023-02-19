import type React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App: React.FC = (): any => {
  const [count, setCount] = useState(0)
  const a = 'hhhh'
  const hola = (value: string): string => value

  hola('hola')
  console.log(a)
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Basic Project with Vite + React + Eslint + Prettier</h1>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count: number) => count + 1)
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
