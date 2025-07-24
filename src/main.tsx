import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "@/styles/globals.css"
import "bootstrap-icons/font/bootstrap-icons.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
)
