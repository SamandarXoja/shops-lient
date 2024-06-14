import Navbar from "./components/Navbar"
import Headerinfo from "./components/Headerinfo"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Goods from "./components/Goods"
import Brands from "./components/Brands"



function App() {

  return (
    <>
      <Headerinfo />
      <div className="sticky z-50 top-[-1px]">
        <Navbar />
      </div>
      <Hero />
      <Categories />
      <Goods />
      <Brands /> 
      
     
    </>
  )
}

export default App
