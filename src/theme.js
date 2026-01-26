import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          marginTop: "8px",
          marginRight: "5px",
          backgroundColor: "rgb(5, 190, 107)",
          "&:hover": {
            backgroundColor: "rgb(0, 230, 125)",
          },
        },
        outlined: {
          marginTop: "8px",
          marginRight: "5px",
          color: "white",
          border: "none",
          backgroundColor: "rgb(71, 71, 71)",
          "&:hover": {
            backgroundColor: "rgb(0, 190, 107)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            "& fieldset": {
              borderColor: "lightgray",
            },
            "&:hover fieldset": {
              borderColor: "rgb(0, 230, 125)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgb(0, 230, 125)",
              borderWidth: "2px",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            "& legend": {
              padding: 0,
              width: 0,
            },
          },
          "& .MuiInputLabel-root": {
            color: "#10af68",
            fontWeight: "bold",
            marginTop: "0px",
            position: "relative",
            marginBottom: "-15px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00E67D",
          },
          "& .MuiInputLabel-shrink": {
            transform: "translate(-0px, -20px) scale(1.15)", 
          },
        },
      },
    },
    MuiSvgIcon: {
        styleOverrides: {
            root: {
                fontSize: '35px',
                cursor: 'pointer',
            }
        }
    }
  },
});

export default theme;
