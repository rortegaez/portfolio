import Header from './components/Header/index.jsx'
// import NavbarSup from './components/NavbarSup/index.jsx'
import KnowMe from './components/KnowMe/index.jsx'
import Project from './components/Project/index.jsx'

import Link from 'next/link.js'

import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.mainBody}>
      {/* <NavbarSup /> */}
      <Header />
      <KnowMe />
      <Project />
    </main>
  )
}
