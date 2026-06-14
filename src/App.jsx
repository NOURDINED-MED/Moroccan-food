import { Route, Routes } from 'react-router-dom'
import CartSidebar from './components/CartSidebar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { AppProvider } from './context/AppContext'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Register from './pages/Register'

export default function App() {
  return <AppProvider><Navbar /><CartSidebar /><Routes><Route path="/" element={<Home />} /><Route path="/menu" element={<Menu />} /><Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} /><Route path="/login" element={<Login />} /><Route path="/register" element={<Register />} /><Route path="/favorites" element={<Favorites />} /><Route path="/cart" element={<Cart />} /><Route path="*" element={<main className="page container empty-state large"><h1>Page not found</h1><a className="button button-primary" href="/">Return home</a></main>} /></Routes><Footer /></AppProvider>
}
