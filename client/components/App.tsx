//import { useFruits } from '../hooks/useFruits.ts'
import Footer from './Footer.tsx'
import Header from './Header.tsx'
import '../styles/main.css'

function App() {
  //const { data } = useFruits()

  return (
    <>
      <div className="app">
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default App
