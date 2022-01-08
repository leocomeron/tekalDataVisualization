import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./Modal.module.css";
import VideoChart from "../charts/VideoChart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.wrapper}>
      <Button
        size="small"
        style={{ color: "white", maxWidth: "120px", margin: "auto" }}
        className={classes.button}
        onClick={handleOpen}
      >
        View Stats
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.Box} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            STATS
          </Typography>
          <Typography component={"span"} className={classes.wrapper} id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <p>{`Model 1: ${props.m1}`}</p>
              <p>{`Model 2: ${props.m2}`}</p>
              <p>{`Model 3: ${props.m3}`}</p>
              <p>{`Media score: ${props.mediaScore}`}</p>
            </div>
            {props.type === 0 && (
              <img className={classes.img} src={props.image} height={150} width={150} alt="img"></img>
            )}
            {props.type === 1 && <VideoChart data={props.data}></VideoChart>}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
