import { useState } from 'react'
import Navigation from './components/Navigation';
import FourColumnInputGrid from './components/FourColumnInputGrid';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1);
  }
  // bg-cover bg-center bg-repeat-y h-screen
  return (
    <>
      <div className="bg-repeat bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.thairath.co.th/media/Dtbezn3nNUxytg04ajZ5Xo4SFI8RW6AkbPn5ILS2vXSQGY.webp')" }}>
        <div className="container mx-auto px-4 mt-20">
          <Navigation /> 
          <FourColumnInputGrid />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
