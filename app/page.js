import Header from './components/Header/index.jsx'
import KnowMe from './components/KnowMe/index.jsx'
import Project from './components/Project/index.jsx'
import Footer from './components/Footer/index.jsx'

import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.mainBody}>
      <Header />
      <KnowMe />
      <Project />
      <Footer />
    </main>
  )
}
