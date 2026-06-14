import { ArrowRight, Clock3, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import FoodCard from '../components/FoodCard'
import { menuItems } from '../data/menu'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">A table rooted in tradition</span>
          <h1>The soul of Morocco, served.</h1>
          <p>Slow-cooked tagines, hand-rolled couscous, and the generous warmth of a Marrakech table.</p>
          <div className="hero-actions"><Link className="button button-primary" to="/menu">Explore the menu <ArrowRight size={18} /></Link><Link className="button button-glass" to="/contact">Reserve a table</Link></div>
          <div className="hero-facts"><span><Star size={17} fill="currentColor" /> 4.9 guest rating</span><span><Clock3 size={17} /> Open daily 12–11 PM</span><span><MapPin size={17} /> Marrakech Medina</span></div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow">Guest favorites</span><h2>From our family table</h2></div><Link className="text-link" to="/menu">View full menu <ArrowRight size={17} /></Link></div>
        <div className="food-grid">{menuItems.filter((dish) => dish.featured).map((dish) => <FoodCard dish={dish} key={dish.id} />)}</div>
      </section>
      <section className="story-band">
        <div className="container story-grid">
          <img src="/images/tajine.jpg" alt="Traditional Moroccan tagine at the table" />
          <div><span className="eyebrow">Our kitchen</span><h2>Patience is our essential ingredient.</h2><p>Our recipes begin with market spices, seasonal produce, and techniques passed from one generation to the next. Every dish is cooked to share.</p><Link className="button button-outline" to="/gallery">See our story <ArrowRight size={17} /></Link></div>
        </div>
      </section>
    </main>
  )
}
