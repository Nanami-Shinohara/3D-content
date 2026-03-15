import { useState, type Dispatch, type FC, type SetStateAction } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import Button from "./Button";

type ColorPaletteProps = {
  selectColor: string;
  setSelectColor: Dispatch<SetStateAction<string>>;
};

const colors = [
  "#ffffff",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
];

const ColorPalette: FC<ColorPaletteProps> = ({
  selectColor,
  setSelectColor,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSelectColor = (e: string) => {
    setSelectColor(e);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          backgroundColor: selectColor,
          color: "#000000",
          width: "60px",
          height: "35px",
          marginRight: "10px",
        }}
        text={"色"}
      />

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ p: 2 }}>
          <Grid container spacing={1} sx={{ width: 200 }}>
            {colors.map((c) => (
              <Grid size={3} key={c}>
                <Box
                  onClick={() => onSelectColor(c)}
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: c,
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Popover>
    </>
  );
};

export default ColorPalette;
