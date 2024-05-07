"use client";
import React from "react";
import styles from "./style.module.css";
import { Heading } from "../heading/Heading";
import { Input } from "../input/Input";
import Tree from "../tree/Tree";

const treeData = [
  {
    title: "Real numbers",
    branch: [
      {
        title: "Rational numbers",
        branch: [
          {
            title: "Integers",
            branch: [
              {
                title: "Negative integers",
              },
              {
                title: "Zero",
              },
              {
                title: "Positive integers",
              },
            ],
          },
          {
            title: "Noninteger rational numbers",
          },
        ],
      },
      {
        title: "Irrational numbers",
      },
    ],
  },
];

export default function Numbers() {
  const [number, setNumber] = React.useState(2);
  return (
    <section>
      <div className={styles.wrapper}>
        <Heading headingLevel="h1">Numbers</Heading>
        <div className={styles.input__box}>
          <Input
            label="Number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            type="number"
          />
        </div>
        <p className={styles.description}>{number}</p>
        <Tree treeData={treeData} />
      </div>
    </section>
  );
}
