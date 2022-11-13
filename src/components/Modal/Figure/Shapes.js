import { useState } from "react";
import Card from "../../UI/Card";
import RadioInput from "../../UI/RadioInput";

import classes from "./Shapes.module.css";

const SHAPES = [
  { id: "s1", shape: "Line" },
  { id: "s2", shape: "Circle" },
  { id: "s3", shape: "Square" },
];

const Shapes = (props) => {
  const [radioValue, setRadioValue] = useState("");

  const onValueChange = (e) => {
    const value = e.target.value;
    props.onUpdate(value);
    setRadioValue(value);
  };

  console.log(props.disabled);

  return (
    <Card>
      <h3> Drawing shapes</h3>
      <div onChange={onValueChange} value={radioValue}>
        {SHAPES.map(({ id, shape }) => {
          return (
            <RadioInput
              key={id}
              name="shape"
              id={id}
              value={shape}
              disabled={props.disabled}
            >
              {shape}
            </RadioInput>
          );
        })}
      </div>
    </Card>
  );
};

export default Shapes;
