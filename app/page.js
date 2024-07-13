import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Blob from "@/components/blob";

export default function Home() {
  return (
    <main className={styles.container}>
      <NavBar />
      <div className={styles.hero}>
        <Blob />
        <div className={styles.topDivider}></div>
        <h1 className={`${styles.topText} text`}>
          if literature has engaged me as a project,
        </h1>
        <p className={`${styles.lowerText} text`}>
          first as a reader, then as a writer, it is an extension of my
          sympathies to other selves, other domains, other dreams, other worlds,
          other territories.
        </p>
        <div className={styles.bottomDivider}>
          <span className={styles.leftLine}></span>
          <p className={styles.author}>Susan Sontag</p>
          <span className={styles.rightLine}></span>
        </div>
        <Image
          className={styles.portrait}
          style={{ mixBlendMode: "darken" }}
          placeholder="blur"
          blurDataURL="/images/sontag.jpg"
          src="/images/sontag.jpg"
          alt="The Susan Sontag Foundation"
          width={400}
          height={400}
        />
      </div>
      <Footer />
    </main>
  );
}
