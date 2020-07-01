import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1,
    },
}))

function Header(props) {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    COFFEE MAKER
                </Typography>
                <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
