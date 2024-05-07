import React from "react";
import styles from "./style.module.css";
import { getRandomInt } from "@/utils/randomInter";
import { Button } from "@/components/button/Button";
import Description from "@/components/description/Description";

export default function SetsNumber() {
  const [numbers, setNumbers] = React.useState([0]);
  function setRandomNumber() {
    setNumbers([...numbers, getRandomInt(100)]);
  }
  return (
    <div className={styles.set}>
      <h1 className={styles.sets__title}>Sets of Numbers</h1>
      <Description>
        A set is a collection of objects. For example, the set &#123;1, 2, 3, 4,
        5&#125;
      </Description>
      <div className={styles.wrapper}>
        <span className={styles.brack}>&#123;</span>
        {numbers.map((number, index) => {
          return (
            <p className={styles.number} key={index}>
              {number}
            </p>
          );
        })}
        <span className={styles.brack}>&#125;</span>
      </div>
      <Button onClick={setRandomNumber}>add random number</Button>
      <Description>
        Two basic sets of numbers are the natural numbers (often called the
        positive integers) and the whole numbers.
      </Description>
    </div>
  );
}
