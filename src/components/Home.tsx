import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = props => {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>Here is Home </div>
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
    </div>
  );
};

export default Home;
