import { type FC } from "react";
import { Button as MuiButton, type SxProps, type Theme } from "@mui/material";

type ButtonProps = {
  onClick:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  sx: SxProps<Theme> | undefined;
  text: string;
};

const Button: FC<ButtonProps> = ({ onClick, sx, text }) => {
  return (
    <MuiButton variant="contained" onClick={onClick} sx={sx}>
      {text}
    </MuiButton>
  );
};

export default Button;
