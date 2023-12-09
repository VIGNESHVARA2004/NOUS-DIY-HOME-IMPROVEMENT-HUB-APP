import React from "react";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";
const Confirmation = () => {
  const navigate = useNavigate()
  return (
    <Box m="90px 200px" width="80%" height="calc(50vh - 100px)">
      <Alert onClose={() => navigate("/")} severity="success" color="info" sx={{alignItems:"center",marginTop:"100px"}}>
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Congrats on Making your Purchase</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;