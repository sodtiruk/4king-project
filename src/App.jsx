import { useState } from 'react'
import Navigation from './components/Navigation';
import Button from '@mui/material/Button';
import FourColumnInputGrid from './components/FourColumnInputGrid';
import CardInformation from './components/CardInformation'
import Footer from './components/Footer';

function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount( count + 1 );
  }
// bg-cover bg-center bg-repeat-y h-screen
  return (
    <div className="bg-repeat bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.thairath.co.th/media/Dtbezn3nNUxytg04ajZ5Xo4SFI8RW6AkbPn5ILS2vXSQGY.webp')"}}>
      <div className="container mx-auto px-4">
        <Navigation/> 
        <h1 className='text-6xl underline font-bold'>
          Hello world!
        </h1>
        <br />
        <br />
        <FourColumnInputGrid />
      </div>
   </div>

  )
}

export default App
