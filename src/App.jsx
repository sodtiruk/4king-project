import { useState } from 'react'
import Navigation from './components/Navigation';
import Button from '@mui/material/Button';
import FourColumnInputGrid from './components/FourColumnInputGrid';
import CardInformation from './components/CardInformation'
import FromRegister from './components/FromRegister';

function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount( count + 1 );
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <Navigation/> 
        <h1 className='text-6xl underline font-bold'>
          Hello world!
        </h1>
        <br />
        <br />
        <FourColumnInputGrid />
        <CardInformation />
        <ButtonUsage />
        <FromRegister />
        <br />
        <br />

      </div>
   </>
  )
}

export default App
