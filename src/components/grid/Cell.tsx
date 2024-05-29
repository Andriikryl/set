import { ReactNode } from "react";
import styles from "./style.module.css";
export interface CellProps {
  row: number | "auto"; // Allow "auto" as a value
  column: number | "auto"; // Allow "auto" as a value
  children?: ReactNode; // Assuming children can be any React node
}
export function Cell({ row, column, children }: CellProps) {
  return (
    <div
      className={styles.grid__cell}
      style={{
        gridRow: row === "auto" ? "auto" : row,
        gridColumn: column === "auto" ? "auto" : column,
      }}
    >
      {children}
    </div>
  );
}
