import React from 'react'
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import {Topbar,Home, Shop, Cart, Contact, NotFound, Header} from './pages/index'

const App = () => {
  return (
    <div>
    <Router>
      <Topbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
