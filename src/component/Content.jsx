import React, { useState } from 'react'
import CoffeeCard from './CoffeeCard'
import { Grid } from '@material-ui/core'
import data from './data'

import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'

function Content(props) {
    const [open, setOpen] = useState(false)
    const [title, settitle] = useState('')
    const [description, setDescription] = useState('')
    const handlereadmore = (title, description) => {
        setOpen(true)
        settitle(title)
        setDescription(description)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Grid container spacing={2}>
            {data.map((each) => (
                <Grid item sm={4} xs={12} key={each.price}>
                    <CoffeeCard
                        data={each}
                        handlereadmore={handlereadmore}
                        handleClose={handleClose}
                    />
                </Grid>
            ))}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{description}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Content
