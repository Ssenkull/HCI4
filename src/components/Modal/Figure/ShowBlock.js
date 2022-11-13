import { Color } from "three";
import Model from "../../3d-model/Model";
import Card from "../../UI/Card";
import Circle from "./Shapes/Circle";
import Line from "./Shapes/Line";
import Square from "./Shapes/Square";

import classes from "./ShowBlock.module.css";

const ShowBlock = (props) => {
  const { color, shape, tool } = props.settings;

  const circleStyle = {
    backgroundColor: color,
    height: tool === "Pen" ? "2px" : "5px",
  };

  const formBorder = `${tool === "Pen" ? "2px" : "5px"} solid ${color}`;

  const style = {
    border: formBorder,
  };

  return (
    <section className={classes.show}>
      <Card>
        <div className={classes.picture}>
          {shape === "Line" && tool !== "MyFigure" && (
            <Line style={circleStyle}></Line>
          )}
          {shape === "Circle" && tool !== "MyFigure" && (
            <Circle style={style} />
          )}
          {shape === "Square" && tool !== "MyFigure" && (
            <Square style={style} />
          )}
          {tool === "MyFigure" && <Model color={color} />}
        </div>
      </Card>
    </section>
  );
};

export default ShowBlock;
