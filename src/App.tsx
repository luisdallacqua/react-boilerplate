import React from 'react'
import './App.css'

type Props = {
  title?: string
}

const foo = 'bla'

function App({ title = 'Stomper Incorporation' }: Props) {
  return <h1>{title}</h1>
}

export default App
