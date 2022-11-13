import classes from "./RadioInput.module.css";

const RadioInput = (props) => {
  
  return (
    <div className={classes.radio}>
      <input
        id={props.id}
        type="radio"
        value={props.value}
        name={props.name}
        disabled={props.disabled}
      />
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
};

export default RadioInput;
