const lineStyle = {
  width: "150px",
  position: "absolute",
  transform: "rotateX(45deg)",
  top: "30px",
  left: "10px",
};

const Line = (props) => {
  const styles = { ...props.style, ...lineStyle };

  return <div style={styles}></div>;
};

export default Line;
