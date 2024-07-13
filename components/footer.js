import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>PRIZE FOR TRANSLATION</li>
        <li>
          <Link href="/susan-sontag">SUSAN SONTAG</Link>
        </li>
        <li>ABOUT</li>
        <li>EVENTS</li>
        <li>DONATE</li>
      </ul>
      <p className={styles.text}>
        © 2010 Estate of Susan Sontag. All Rights Reserved.
      </p>
    </main>
  );
}
