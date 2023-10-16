import Header from './components/Header'
import KnowMe from './components/KnowMe'
import Footer from './components/Footer.jsx'

// import styles from './page.module.css'

import './globals.css'

export default function Home() {

  return (
    <main className='mainBody'>
      <div className='container'>
        {/* Redes sociales, nombre y iconos tecnologías */}
        <Header />
        {/* Quien soy, proyectos y certificados */}
        <KnowMe />
        {/* Hora/dia y nombre */}
        <Footer />
      </div>
    </main>
  )
}
