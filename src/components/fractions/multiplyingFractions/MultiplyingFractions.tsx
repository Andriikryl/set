"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { Grid } from "@/components/grid/Grid";
import { Cell } from "@/components/grid/Cell";
import { Heading } from "@/components/heading/Heading";
import { Input } from "@/components/input/Input";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import Description from "@/components/description/Description";

export default function MultiplyingFractions() {
  const [numeretor, SetNumerator] = useState(4);
  const [deNumeretor, SetDeNumerator] = useState(7);
  const [numeretorSec, SetNumeratorSec] = useState(2);
  const [deNumeretorSec, SetDeNumeratorSec] = useState(3);

  const fraction1 = `\\frac{${numeretor}}{${deNumeretor}}`;
  const fraction2 = `\\frac{${numeretorSec}}{${deNumeretorSec}}`;
  const multiplication = `${fraction1} \\times ${fraction2}`;
  const result = `\\frac{${numeretor * numeretorSec}}{${
    deNumeretor * deNumeretorSec
  }}`;
  const expression = `${multiplication} = ${result}`;
  const generateCells = () => {
    const cells = [];
    for (let col = 1; col <= numeretorSec; col++) {
      for (let row = deNumeretor - numeretor + 1; row <= deNumeretor; row++) {
        cells.push(
          <Cell key={`${row}-${col}`} row={row} column={col}>
            <div className={styles.highlightedCell} />
          </Cell>
        );
      }
    }
    return cells;
  };
  return (
    <div className={styles.multiply__box}>
      <Heading headingLevel="h3">Multiplying Fractions</Heading>
      <div className={styles.flex__group}>
        <div className={styles.flow}>
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
        </div>
        <div className={styles.flow}>
          <Input
            label="Numenator"
            value={numeretorSec}
            onChange={(e) => SetNumeratorSec(Number(e.target.value))}
            type="number"
            min={1}
          />
          <Input
            label="Denumenator"
            value={deNumeretorSec}
            onChange={(e) => SetDeNumeratorSec(Number(e.target.value))}
            type="number"
            min={1}
          />
          <Latex>{`$$${fraction2}$$`}</Latex>
        </div>
      </div>
      <Latex>{`$$${expression}$$`}</Latex>
      <div className={styles.wrapper}>
        <Grid rows={deNumeretor} columns={deNumeretorSec}>
          {generateCells()}
        </Grid>
      </div>
      <Description>
        If this square is divided into 3 equal parts vertically and 7 equal
        parts horizon- tally, it is divided into 21 equals parts, and each
        represents 1 of the total area. The 21 area of the shaded rectangle in
        the square is 8 , because it contains 8 of the 21 parts. 21 The width,
        w, of the shaded rectangle is 4/7; its length, l, is 2/3; and its area,
        A, is the product of l and w
      </Description>
    </div>
  );
}
