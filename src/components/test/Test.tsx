"use client";
import React, { useEffect, useRef, useState } from "react";
import { Heading } from "../heading/Heading";
import styles from "./style.module.css";
import * as d3 from "d3";
import { useInterval } from "@/hooks/useIterval";

const generateDataset = () =>
  Array(10)
    .fill(0)
    .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10]);

export default function Test() {
  return (
    <section className={styles.wrapper}>
      <div>
        <Heading headingLevel="h2">D3</Heading>
      </div>
      <div>
        <Svg />
        <Circle />
      </div>
    </section>
  );
}

const Svg = () => {
  return (
    <svg
      style={{
        border: "2px solid gold",
      }}
    />
  );
};

// const Circle = () => {
//   const ref = useRef(null);
//   useEffect(() => {
//     const svgElement = d3.select(ref.current);
//     svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
//   }, []);
//   return <svg ref={ref} />;
// };

// const Circle = () => {
//   return (
//     <svg>
//       <circle cx="150" cy="77" r="40" />
//     </svg>
//   );
// };

// const Circle = () => {
//   const [dataset, setDataset] = useState(generateDataset());
//   const ref = useRef(null);
//   useEffect(() => {
//     const svgElement = d3.select(ref.current);
//     svgElement
//       .selectAll("circle")
//       .data(dataset)
//       .join("circle")
//       .attr("cx", (d) => d[0])
//       .attr("cy", (d) => d[1])
//       .attr("r", 3);
//   }, [dataset]);
//   // useInterval(() => {
//   //   const newDataset = generateDataset();
//   //   setDataset(newDataset);
//   // }, 2000);
//   return <svg viewBox="0 0 100 50" ref={ref} />;
// };

const Circle = () => {
  const [dataset, setDataset] = useState(generateDataset());
  // useInterval(() => {
  //   const newDataset = generateDataset();
  //   setDataset(newDataset);
  // }, 2000);

  return (
    <div>
      <svg viewBox="0 0 100 50">
        {dataset.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" />
        ))}
      </svg>
    </div>
  );
};
