import Head from 'next/head'
import dynamic from 'next/dynamic'
const ShapeCanvas = dynamic(
  () => import('../components/shape-canvas'),
  { ssr: false }
)
import Nav from '../components/nav'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kahani Challenge</title>
        <meta name="description" content="Kahani Challenge - Rectangle Generator and Mover" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <ShapeCanvas />
      </main>
    </div>
  )
}
