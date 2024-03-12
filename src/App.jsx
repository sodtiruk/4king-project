import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount( count + 1 );
  }

  return (
    <>
      <h1 className='text-3xl underline font-bold'>
        Hello world!
      </h1>
    </>
  )
}

export default App
