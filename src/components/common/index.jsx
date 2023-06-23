import React from "react";
import styles from "./styles.module.scss";

const CustomizableTable = ({ title, data, columnsWithAction }) => {
  return (
    <div className={styles.Customtable}>
      <h1>{title}</h1>
      <table className={styles.Table}>
        <thead className={styles.TableGroupHead}>
          <tr className={styles.TableRow}>
            {columnsWithAction?.map((column, index) => (
              <th className={styles.TableHead} key={index}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.TableRow}>
              {columnsWithAction?.map((column, colIndex) => {
                return (
                  <td className={styles.TableCell} key={colIndex}>
                    {row[column?.name].toString()}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomizableTable;
