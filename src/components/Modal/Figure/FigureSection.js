import Shapes from "./Shapes";
import Tools from "./Tools";

import classes from "./FigureSection.module.css";
import Colors from "./Colors";
import ShowBlock from "./ShowBlock";
import { useEffect, useState } from "react";

const FigureSection = (props) => {
  const [settings, setSettings] = useState({
    color: "",
    tool: "",
    shape: "",
  });

  const updateTool = (value) => {
    setSettings((curState) => {
      return { ...curState, tool: value };
    });
  };

  const updateColor = (value) => {
    setSettings((curState) => {
      return { ...curState, color: value };
    });
  };

  const updateShape = (value) => {
    setSettings((curState) => {
      return { ...curState, shape: value };
    });
  };

  useEffect(() => {
    console.log(settings.tool);
  }, [settings.tool]);

  return (
    <section className={classes.section}>
      <article className={classes.shapes}>
        <Tools onUpdate={updateTool} />
        <Shapes
          onUpdate={updateShape}
          disabled={settings.tool === "MyFigure"}
        />
      </article>
      <Colors onUpdate={updateColor} />
      <ShowBlock settings={settings} />
    </section>
  );
};

export default FigureSection;
