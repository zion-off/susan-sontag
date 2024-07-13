import Image from "next/image";

import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          className={styles.signature}
          style={{ mixBlendMode: "darken" }}
          placeholder="blur"
          blurDataURL="/images/signature.jpeg"
          src="/images/signature.jpeg"
          alt="The Susan Sontag Foundation"
          width={150}
          height={150}
        />
        <p className={styles.logoText}>foundation</p>
      </div>
      <ul className={styles.navBar}>
        <li>
          <a href="#">susan sontag</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">events</a>
        </li>
        <li>
          <a href="#">prize for translation</a>
        </li>
      </ul>
    </div>
  );
}
