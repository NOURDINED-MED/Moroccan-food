const images = [
  ['/images/tajine2.webp', 'Glazed tagine with vegetables'],
  ['/images/Couscous.webp', 'Royal couscous platter'],
  ['/images/pastilla.jpeg', 'Crisp Moroccan pastilla'],
  ['/images/chermoula-fish.jpeg', 'Fish with fresh chermoula'],
  ['/images/mechoui.jpeg', 'Slow roasted mechoui lamb'],
  ['/images/msemen.jpeg', 'Freshly folded msemen'],
  ['/images/Zaalouk.jpeg', 'Smoky zaalouk salad'],
  ['/images/Harira & Dates 2.webp', 'Harira soup and dates']
]

export default function Gallery() {
  return (
    <main className="page">
      <header className="page-header container"><span className="eyebrow">At our table</span><h1>A feast for every sense.</h1><p>Colors, textures, and traditions from our kitchen in the heart of Marrakech.</p></header>
      <section className="container gallery-grid">{images.map(([src, alt], index) => <figure className={`gallery-item item-${index + 1}`} key={src}><img src={src} alt={alt} loading="lazy" /><figcaption>{alt}</figcaption></figure>)}</section>
    </main>
  )
}
