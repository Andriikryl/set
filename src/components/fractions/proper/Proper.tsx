import React, { useState } from "react";
import styles from "./style.module.css";
import { Heading } from "@/components/heading/Heading";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import Description from "@/components/description/Description";
import { Input } from "@/components/input/Input";

export default function Proper() {
  const [numeretor, SetNumerator] = useState(4);
  const [deNumeretor, SetDeNumerator] = useState(7);
  const fraction1 = `\\frac{${numeretor}}{${deNumeretor}}`;
  return (
    <div className={styles.flow}>
      <Heading headingLevel="h3">
        Proper fractions or Improper fractions
      </Heading>
      <Input
        label="Numenator"
        value={numeretor}
        onChange={(e) => SetNumerator(Number(e.target.value))}
        type="number"
        min={1}
      />
      <Input
        label="Denumenator"
        value={deNumeretor}
        onChange={(e) => SetDeNumerator(Number(e.target.value))}
        type="number"
        min={1}
      />
      <Latex>{`$$${fraction1}$$`}</Latex>
      {numeretor >= deNumeretor ? (
        <div className={styles.info}>Improper fraction</div>
      ) : (
        <div className={styles.info}>Proper fractions</div>
      )}
      <Description>
        Fractions whose numerators are less than their denominators, such as 8 ,
        are 21 called proper fractions. Fractions whose numerators are greater
        than or equal to their denominators, such as 52, are called improper
        fractions. 45
      </Description>
    </div>
  );
}
