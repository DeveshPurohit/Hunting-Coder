//Added to GitHub
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Inside Devesh </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <img
          className={styles.myImg}
          src="/homeimaeg.jpeg"
          alt="Hunting Coder"
        />

        <h2>&lt;Hunting Coder/&gt;</h2>

        <p className={styles.description}>
          A Blog for hunting coder by hunting coder
        </p>

        <div className="blogs">
          <h2>Popular blogs</h2>
          <div className="blogitem">
            <h3 className={styles.h3}>Furasst Beloog</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, odit...
            </p>
            <button className={styles.btn}>Read more</button>
          </div>
          <div className="blogitem">
            <h3 className={styles.h3}>Furasst Beloog</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, odit...
            </p>
            <button className={styles.btn}>Read more</button>
          </div>
          <div className="blogitem">
            <h3 className={styles.h3}>Furasst Beloog</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, odit...
            </p>
            <button className={styles.btn}>Read more</button>
          </div>
        </div>
      </main>
    </div>
  );
}
