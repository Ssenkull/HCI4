import { styled, Slider, Stack } from "@mui/material";
import Card from "../../UI/Card";

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: "black",
  height: 2,
  "&:hover": {
    cursor: "auto",
  },
  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
  },
}));

const SliderVolume = (props) => {
  return (
    <Card>
      <h3> Volume </h3>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "80%",
          alignItems: "center",
        }}
      >
        <PSlider
          min={0}
          max={100}
          value={props.volume}
          onChange={(e, v) => props.onChange(v)}
        />
      </Stack>
    </Card>
  );
};

export default SliderVolume;
