import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import dynamic from 'next/dynamic'
const ShapeCanvas = dynamic(
  () => import('../components/shape-canvas'),
  { ssr: false }
)
import Nav from '../components/nav'
import Modal from 'react-modal'
import styles from '../styles/home.module.scss'

Modal.setAppElement('.root')

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db('myDatabase')`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home() {
  return (
    <div className={'root'}>
      <Head>
        <title>Kahani Challenge</title>
        <meta name='description' content='Kahani Challenge - Rectangle Generator and Mover' />
        <link href='https://fonts.googleapis.com/css2?family=Cairo+Play:wght@300&display=swap' rel='stylesheet' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <ShapeCanvas />
      </main>
    </div>
  )
}
