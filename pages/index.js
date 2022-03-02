//Added to GitHub
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
         
        `}
      </style>
      <Head>
        <title>Hunting Inside Devesh </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <Image className={styles.myimg} src="/homeimaeg.jpeg" height={200} width={200}/>
        
        <p className={styles.description}>
        A Blog for hunting coder by hunting coder
        </p>

        <div className="blogs">
          <h2>Popular blogs</h2>
          <div className="blogitem">
            <h3>Furasst Beloog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, odit.</p>
          </div>
          <div className="blogitem">
            <h3>Furasst Beloog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, odit.</p>
          </div>
          <div className="blogitem">
            <h3>Furasst Beloog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, odit.</p>
          </div>
        </div>
        
      </main>

    
    </div>
  )
}
