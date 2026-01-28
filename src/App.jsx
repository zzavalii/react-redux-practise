import './styles.scss'
import Header from './components/Header/Header'
import BreadContent from './features/bread/BreadContent'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'

function App() {

  return (
    <>
      <div className="mainBody">
        <CustomCursor />
        <Header />
        <BreadContent />
        <Carousel />

        <Footer />
      </div>
    </>
  )
}

export default App
