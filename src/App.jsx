import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import { ConfigProvider } from './context/ConfigProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider>
      <Layout>
        <Home />
      </Layout>
    </ConfigProvider>
  )
}

export default App
