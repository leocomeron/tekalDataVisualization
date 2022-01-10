import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingState() {
  return (
    <Box
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ display: "flex", m: 6 }}
    >
      <CircularProgress />
    </Box>
  );
}
