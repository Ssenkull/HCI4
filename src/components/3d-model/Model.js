import { Canvas } from "@react-three/fiber";
import Figure from "./FigureConfigurations";

const Model = ({color}) => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <ambientLight />
      <Figure color={color} position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Model;
