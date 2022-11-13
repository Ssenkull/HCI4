import { useState } from "react";
import Card from "../../UI/Card";
import RadioInput from "../../UI/RadioInput";

import classes from "./Tools.module.css";

const TOOLS = [
  { id: "t1", tool: "Pen" },
  { id: "t2", tool: "Brush" },
  { id: "t3", tool: "MyFigure" },
];

const Tools = (props) => {
  const [radioValue, setRadioValue] = useState("");

  const onValueChange = (e) => {
	const value = e.target.value;
	props.onUpdate(value);
    setRadioValue(value);
  };

  return (
      <Card>
        <h3> Drawing tools</h3>
        <div onChange={onValueChange} value={radioValue}>
          {TOOLS.map(({ id, tool }) => {
            return (
              <RadioInput key={id} name="tool" id={id} value={tool}>
                {tool}
              </RadioInput>
            );
          })}
        </div>
      </Card>
  );
};

export default Tools;
