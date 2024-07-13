"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import styles from "./navBar.module.css";

function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.hamburgerMenu}
        >
          <div className={styles.closeButton} onClick={() => setIsOpen(false)}>
            close
          </div>
          <ul className={styles.hamburgerList}>
            <li>
              <Link href="/susan-sontag">Susan Sontag</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Prize for Translation</a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image
            className={styles.signature}
            style={{ mixBlendMode: "darken", zIndex: 1 }}
            placeholder="blur"
            blurDataURL="/images/signature.jpeg"
            src="/images/signature.jpeg"
            alt="The Susan Sontag Foundation"
            width={150}
            height={150}
          />
          <p className={styles.logoText}>foundation</p>
        </Link>
      </div>
      <div className={styles.hamburger}>
        <div className={styles.openButton} onClick={() => setIsOpen(true)}>
          Menu
        </div>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <ul className={styles.navBar}>
        <li>
          <Link href="/susan-sontag">susan sontag</Link>
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
