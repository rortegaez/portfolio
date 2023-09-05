import Header from './components/Header/index.jsx'
import NavbarSup from './components/NavbarSup/index.jsx'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.mainBody}>
      <NavbarSup />
      <Header />
    </main>
  )
}
