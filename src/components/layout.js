import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"

const layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      
      <Footer />
    </main>
  )
}

export default layout
