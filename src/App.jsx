import { Route, Routes } from "react-router"
import Home from "./Home"
import Contact from "./Contact"
import Header from "./Header"
import PageNotFound from "./PageNotFound"
import Features from "./Features"
import Users from "./Users"
import UserDetail from "./UserDetail"
import Footer from "./Footer"
import ColorMixture from "./ColorMixture"
import Faqs from "./Faqs"

function App() {

  return (
    <div className="app-wrapper">

      <Header />

      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/features" element={<Features />} />
          <Route path="/feature/feature-one" element={<h1>Feature One</h1>} />
          <Route path="/feature/feature-two" element={<h1>Feature Two</h1>} />
          <Route path="/feature/users" element={<Users />} />
          <Route path="/feature/user/:id" element={<UserDetail />} />
          <Route path="/feature/color-mixture" element={<ColorMixture />} />
          <Route path="/feature/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/*" element={<PageNotFound />} />  
        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App
