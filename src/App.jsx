import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import { ConfigProvider } from './context/ConfigProvider'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <Layout>
        <Home />
      </Layout>
    
  )
}

export default App
