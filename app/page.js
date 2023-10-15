import Header from './components/Header'
import KnowMe from './components/KnowMe'
import Project from './components/Project'
import Footer from './components/Footer.jsx'

// import styles from './page.module.css'

import './globals.css'

export default function Home() {

  return (
    <main className='mainBody'>
      <div className='container'>
        <Header />
        <KnowMe />
        <Project />
        <Footer />
      </div>
    </main>
  )
}
