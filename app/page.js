import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/navBar";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Blob from "@/components/blob";

export default function Home() {
  return (
    <main className={styles.container}>
      <NavBar />
      <div className={styles.hero}>
        <Blob />
        <Banner
          topText={"if literature has engaged me as a project,"}
          lowerText={
            "first as a reader, then as a writer, it is an extension of my sympathies to other selves, other domains, other dreams, other worlds, other territories."
          }
        />
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
        <Footer additionalStyles={"styles.extraPadding"} />
    </main>
  );
}
