import { Route, Routes } from "react-router"
import Language from "./components/Language/Language"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Ebook from "./pages/Ebook/Ebook"
import EbookDetails from "./pages/Ebook/EbookDetails/EbookDetails"

function App() {

  return (
    <div>
      <Language />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ebooks" element={<Ebook />} />
          <Route path="/ebooks/:ebookId" element={<EbookDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
