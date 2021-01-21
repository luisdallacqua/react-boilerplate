import React from 'react'
import './App.css'

type Props = {
  title?: string
}

function App({ title = 'Stomper Incorporation' }: Props) {
  return <h1>{title}</h1>
}

export default App
