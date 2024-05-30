"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { Heading } from "../heading/Heading";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import Description from "../description/Description";
import { Input } from "../input/Input";
import { range } from "@/utils/range";
import clsx from "clsx";
import { simplify } from "@/utils/simplify";
import Tree from "../tree/Tree";
import { generateTreeData } from "@/utils/generateTreeData";
import MultiplyingFractions from "./multiplyingFractions/MultiplyingFractions";
import Proper from "./proper/Proper";

export default function Fractions() {
  const [numeretor, SetNumerator] = useState(3);
  const [deNumeretor, SetDeNumerator] = useState(5);
  const [simpNumeretor, SetSimpNumerator] = useState(6);
  const [simpDeNumeretor, SetSimpDeNumerator] = useState(8);
  const [fuctorNumber, setFuctorNumber] = useState(210);

  const fuctionEx = `$$\\frac{${numeretor}}{${deNumeretor}}$$`;
  const fuctionSimpEx = `$$\\frac{${simpNumeretor}}{${simpDeNumeretor}}$$`;
  const simplifiedFraction = simplify(`${simpNumeretor}/${simpDeNumeretor}`);
  const isSingleNumber = !simplifiedFraction.includes("/");
  const simpRes = isSingleNumber
    ? `$$${simplifiedFraction}$$`
    : `$$\\frac{${simplifiedFraction.split("/")[0]}}{${
        simplifiedFraction.split("/")[1]
      }}$$`;
  const treeData = generateTreeData(fuctorNumber);
  return (
    <section>
      <Heading headingLevel="h3">Fractions</Heading>
      <div className={styles.flow}>
        <Description>
          the number above the bar is called the numerator, and the number below
          the bar is called the denominator.
        </Description>
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
        <Latex>{fuctionEx}</Latex>
        <div className={styles.wrapper}>
          {range(1, deNumeretor).map((item, index) => {
            return (
              <div
                className={clsx(styles.box, {
                  [`${styles.box_numeric}`]: index < numeretor,
                })}
                key={index}
              >
                <span>{index + 1}</span>
              </div>
            );
          })}
        </div>
        <Description>
          We often use fractions to indicate parts of a whole. a rectan- gle has
          been divided into 5 equal parts, and 3 of the parts are shaded.
        </Description>
      </div>
      <div className={styles.flow}>
        <Heading headingLevel="h3">Simplifying Fractions</Heading>
        <Description>
          A fraction is in lowest terms when no integer other than 1 will divide
          both its nu- merator and its denominator exactly. The fraction 6 is in
          lowest terms, because only 6 11 1 divides both 6 and 11 exactly. The
          fraction 8 is not in lowest terms, because 2 divides both 6 and 8
          exactly.
        </Description>
        <Input
          label="Numenator"
          value={simpNumeretor}
          onChange={(e) => SetSimpNumerator(Number(e.target.value))}
          type="number"
          min={1}
        />
        <Input
          label="Denumenator"
          value={simpDeNumeretor}
          onChange={(e) => SetSimpDeNumerator(Number(e.target.value))}
          type="number"
          min={1}
        />
        <Latex>{fuctionSimpEx}</Latex>
        <Description>
          We can simplify a fraction that is not in lowest terms by dividing its
          numerator and its denominator by the same number. For example, to
          simplify 68, we divide the numerator and the denominator by 2.
        </Description>
        <p>result:</p>
        <Latex>{simpRes}</Latex>
        <div className={styles.wrapper}>
          {range(1, simpDeNumeretor).map((item, index) => {
            return (
              <div
                className={clsx(styles.box, {
                  [`${styles.box_numeric__simp}`]: index < simpNumeretor,
                })}
                key={index}
              >
                <span>{index + 1}</span>
              </div>
            );
          })}
        </div>
        <Heading headingLevel="h3">Prime-factored form</Heading>
        <Description>
          When a composite number has been written as the product of other
          natural numbers, we say that it has been factored. For example, 15 can
          be written as the product of 5 and 3. The numbers 5 and 3 are called
          factors of 15. When a composite number is written as the product of
          prime numbers, we say that it is written in prime-factored form.
        </Description>
        <Input
          label="Number"
          value={fuctorNumber}
          onChange={(e) => setFuctorNumber(Number(e.target.value))}
          type="number"
          min={2}
        />
        <Tree treeData={treeData} />
      </div>
      <MultiplyingFractions />
      <Proper />
    </section>
  );
}
