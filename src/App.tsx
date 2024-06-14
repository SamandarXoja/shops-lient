import Navbar from "./components/Navbar"
import Headerinfo from "./components/Headerinfo"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Goods from "./components/Goods"
import Brands from "./components/Brands"
import Feedbacks from "./components/Feedbacks"
import Footer from "./components/Footer"
import About from "./components/About"



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
      <Feedbacks />
      <About />
      <Footer />

    </>
  )
}

export default App
