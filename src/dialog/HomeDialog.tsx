import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
interface IHomeDialogProps {}

const HomeDialog: React.FunctionComponent<IHomeDialogProps> = props => {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button color="primary" onClick={onClick}>
        Button
      </Button>
      <Dialog open={open} maxWidth={"lg"}>
        <DialogTitle id="homeDialogTitle">Title</DialogTitle>
        <DialogContent>Content</DialogContent>
        <DialogActions>
          <Button onClick={onClose}>close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomeDialog;
