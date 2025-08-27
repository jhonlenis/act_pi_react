"use client";
import { useState, type ReactNode } from "react";
import styles from "./FlipCard.module.css";

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
};

export default function FlipCard({ front, back }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={styles.flipContainer}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`${styles.flipper} ${flipped ? styles.flipped : ""}`}
      >
        <div className={styles.front}>{front}</div>
        <div className={styles.back}>{back}</div>
      </div>
    </div>
  );
}
