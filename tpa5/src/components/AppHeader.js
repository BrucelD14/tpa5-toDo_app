import React from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <Button variant="primary">Click Me</Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
