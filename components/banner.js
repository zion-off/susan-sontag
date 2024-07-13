import styles from "./banner.module.css";

export default function Banner({ topText, lowerText }) {
  return (
    <main className={styles.main}>
      <div className={styles.topDivider}></div>
      <h1 className={`${styles.topText} hoverable`}>{topText}</h1>
      <p className={`${styles.lowerText} hoverable`}>{lowerText}</p>
      <div className={styles.bottomDivider}>
        <span className={styles.leftLine}></span>
        <p className={styles.author}>Susan Sontag</p>
        <span className={styles.rightLine}></span>
      </div>
    </main>
  );
}
