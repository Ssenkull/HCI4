import Card from "./Card";

import classes from "./Select.module.css";

const Select = (props) => {
  return (
    <Card>
      <h3>{props.name}</h3>
      <select
        disabled={props.disabled}
        className={classes.select}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.options.map(({ value, name }) => {
          return (
            <option key={value} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </Card>
  );
};

export default Select;
