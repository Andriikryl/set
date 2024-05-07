import React, { ReactNode } from "react";
import styles from "./style.module.css";

interface DesriptionProps {
  children: ReactNode;
}

export default function Description({ children }: DesriptionProps) {
  return <p className={styles.description}>{children}</p>;
}
