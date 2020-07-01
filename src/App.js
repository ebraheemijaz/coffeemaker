import React from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Header from './component/Header'
import Content from './component/Content'

function App() {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <br></br>
            <Grid item container>
                <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={10}>
                    <Content />
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </Grid>
    )
}

export default App
