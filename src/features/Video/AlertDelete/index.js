import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteVideoInfo, getMyVideo } from "../videoSlice";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";

const AlertDelete = ({ videoId, userId }) => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();

    setOpen(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();

    setOpen(false);
    dispatch(deleteVideoInfo({ videoId })).then(() =>
      dispatch(getMyVideo({ userId }))
    );
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpen} color="error">
        Remove
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 700 }}>
          Permanently delete this draft video?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            I understand deleting this video from DIYz is permanent and cannot
            be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            startIcon={<DeleteIcon />}
            color="error"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDelete;
