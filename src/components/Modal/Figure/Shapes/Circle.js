const circleStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  position: "absolute",
  top: "30px",
  left: "10px",
};

const Circle = (props) => {
  const styles = { ...props.style, ...circleStyle };

  return <div style={styles}></div>;
};

export default Circle;
