const squareStyle = {
	width: "150px",
	height: "150px",
	position: "absolute",
	top: "30px",
	left: "10px",
 };
 
 const Square = (props) => {
	const styles = { ...props.style, ...squareStyle };
 
	return <div style={styles}></div>;
 };
 
 export default Square;
 