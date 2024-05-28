import React from "react";
import styles from "./style.module.css";
import { Input } from "@/components/input/Input";
import { isPrime } from "@/utils/isPrime";
import { Heading } from "@/components/heading/Heading";
import { Counter } from "@/components/counter/Counter";
import Description from "@/components/description/Description";
import { listRange } from "@/utils/listRange";

export default function PrimeNumber() {
  const [number, setNumber] = React.useState(2);
  const [start, setStart] = React.useState(2);
  const [end, setEnd] = React.useState(100);
  const [startCom, setStartCom] = React.useState(2);
  const [endCom, setEndCom] = React.useState(100);
  const primeNumbersInRange = listRange(start, end, "prime");
  const compositNumbersInRange = listRange(startCom, endCom, "composit");

  return (
    <div className={styles.prime__box}>
      <div>
        <Heading headingLevel="h3">
          Define is number primer or composite ?
        </Heading>
        <div className={styles.wrapper}>
          <Input
            label="Number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            type="number"
            min={2}
          />
          <Counter value={number}></Counter>
          <div className={styles.answer__box}>
            {isPrime(number) ? (
              <p>your number is prime</p>
            ) : (
              <p>your number is composite</p>
            )}
          </div>
          <Description>
            A composite number is one that has more than two positive divisors,
            excluding 1 and itself.
          </Description>
          <Description>
            Prime numbers, those divisible only by 1 and themselves, play a
            crucial role in various mathematical and computational applications.
          </Description>
          <div>
            <div className={styles.flex__group}>
              <Heading headingLevel="h4">
                {" "}
                How many prime numbers in the specified range?
              </Heading>
              <Input
                label="start"
                value={start}
                onChange={(e) => setStart(Number(e.target.value))}
                type="number"
                min={2}
              />
              <Input
                label="end"
                value={end}
                onChange={(e) => setEnd(Number(e.target.value))}
                type="number"
                min={2}
              />
            </div>
            <div className={styles.nambers__box}>
              <span className={styles.brack}>&#123;</span>
              {primeNumbersInRange.map((number, index) => {
                return (
                  <p className={styles.number} key={index}>
                    {number}
                  </p>
                );
              })}
              <span className={styles.brack}>&#125;</span>
            </div>
          </div>
          <div>
            <div className={styles.flex__group}>
              <Heading headingLevel="h4">
                {" "}
                How many composite numbers in the specified range?
              </Heading>
              <Input
                label="start"
                value={startCom}
                onChange={(e) => setStartCom(Number(e.target.value))}
                type="number"
                min={2}
              />
              <Input
                label="end"
                value={endCom}
                onChange={(e) => setEndCom(Number(e.target.value))}
                type="number"
                min={2}
              />
            </div>
            <div className={styles.nambers__box}>
              <span className={styles.brack}>&#123;</span>
              {compositNumbersInRange.map((number, index) => {
                return (
                  <p className={styles.number} key={index}>
                    {number}
                  </p>
                );
              })}
              <span className={styles.brack}>&#125;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
