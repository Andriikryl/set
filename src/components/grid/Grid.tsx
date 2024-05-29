import { ReactElement, CSSProperties } from "react";
import styles from "./style.module.css";

interface GridCellProps {
  content: string; // Adjust this according to your actual cell props
}

interface GridProps {
  rows: number;
  columns: number;
  children: ReactElement<GridCellProps>[];
}

export function Grid({ rows, columns, children }: GridProps) {
  return (
    <div
      className={styles.grid}
      style={{ "--rows": rows, "--columns": columns } as CSSProperties}
    >
      <div className={styles.grid__guides}>
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
              key={index}
              className={styles.grid__guide}
              style={{ "--x": x, "--y": y } as CSSProperties}
            />
          );
        })}
      </div>
      {/* Cells will render here */}
      {children}
    </div>
  );
}
