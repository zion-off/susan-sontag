"use client";

import { useEffect } from "react";
import styles from "./blob.module.css";

export default function Blob() {
  useEffect(() => {
    const blob = document.getElementById("blob");
    const hoverables = document.querySelectorAll(".text");
    let handleMouseMove = (event) => {
      blob.style.left = `${event.clientX}px`;
      blob.style.top = `${event.clientY}px`;
    };

    const handleHoverStart = () => {
      blob.style.opacity = 1; // Adjust opacity to make the blob visible
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleHoverEnd = () => {
      blob.style.opacity = 0;
      document.removeEventListener("mousemove", handleMouseMove);
    };

    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseover", handleHoverStart);
      hoverable.addEventListener("mouseout", handleHoverEnd);
    });

    return () => {
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseover", handleHoverStart);
        hoverable.removeEventListener("mouseout", handleHoverEnd);
      });
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="blob" className={`${styles.blob}`}></div>;
}
