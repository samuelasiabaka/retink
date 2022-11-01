import './App.scss'
import { Navbar } from './components'
import {
  About,
  Contact,
  Footer,
  Header,
  Product,
  Work,
  MiddleText,
} from './container'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Product />
      <MiddleText />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
