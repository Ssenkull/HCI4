import { useState } from "react";
import Card from "../../UI/Card";
import RadioInput from "../../UI/RadioInput";

import classes from "./Colors.module.css";

const COLORS = [
  { id: "c1", color: "Black" },
  { id: "c2", color: "Blue" },
  { id: "c3", color: "Green" },
  { id: "c4", color: "Cyan" },
  { id: "c5", color: "Red" },
  { id: "c6", color: "Magenta" },
  { id: "c7", color: "Yellow" },
  { id: "c8", color: "White" },
];

const Colors = (props) => {
  const [radioValue, setRadioValue] = useState("");

  const onValueChange = (e) => {
	const value = e.target.value;
	props.onUpdate(value);
    setRadioValue(value);
  };

  return (
    <article className={classes.colors}>
      <Card>
        <h3> Drawing colors</h3>
        <div onChange={onValueChange} value={radioValue}>
          {COLORS.map(({ id, color }) => {
            return (
              <RadioInput key={id} name="color" id={id} value={color}>
                {color}
              </RadioInput>
            );
          })}
        </div>
      </Card>
    </article>
  );
};

export default Colors;
