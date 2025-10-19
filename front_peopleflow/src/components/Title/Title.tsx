"use client";
import React from "react";
import SplitText from "../SplitText/SplitText";
import styles from "./Title.module.css";

const handleAnimationComplete = () => {};

export default function Title() {
  return (
    <div className={styles.textContainer}>
      <SplitText
        text='People Flow!'
        className='text-9xl font-semibold text-center pl-5 text-white'
        delay={100}
        duration={0.6}
        ease='power3.out'
        splitType='chars'
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin='-100px'
        textAlign='center'
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
