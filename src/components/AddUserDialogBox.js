import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material'

const AddUserDialogBox = ({ handleClickOpen, handleClose, open, addNewUser }) => {
  const initialData = {
    name: '',
    email: '',
    mobile_no: '',
  }
  const [data, setData] = React.useState(initialData)
  const onChangeHandler = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    })
  }
  return (
    <Dialog fullWidth maxWidth={'xs'} open={open} onClose={handleClose}>
      <DialogTitle>ADD NEW USER</DialogTitle>
      <DialogContent>
        <Grid item xs={12}>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            size="medium"
            variant="standard"
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item mt={2} xs={12}>
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            size="medium"
            variant="standard"
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item mt={2} xs={12}>
          <TextField
            autoFocus
            margin="dense"
            name="mobile_no"
            label="Phone Number"
            type="number"
            size="medium"
            variant="standard"
            onChange={onChangeHandler}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            addNewUser(data)
            setData(initialData)
          }}
        >
          ADD
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default React.memo(AddUserDialogBox)
