import React from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import CardMedia from '@material-ui/core/CardMedia'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import ShareIcon from '@material-ui/icons/ShareOutlined'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

function CoffeeCard(props) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar
                        src={props.data.avatarUrl}
                        aria-label="recipe"
                        className={classes.avatar}
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={props.data.title}
                subheader={props.data.price}
            />
            <CardMedia
                style={{ height: '250px' }}
                image={props.data.imageUrl}
            />
            <CardContent>
                <Typography variant="body1" component="p">
                    {props.data.description.length > 72 ? (
                        <>
                            {props.data.description.slice(0, 72) + '...  '}
                            <Button
                                size="small"
                                style={{ color: 'blue' }}
                                onClick={() =>
                                    props.handlereadmore(
                                        props.data.title,
                                        props.data.description
                                    )
                                }
                            >
                                Read more
                            </Button>
                        </>
                    ) : (
                        props.data.description
                    )}
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                >
                    <Button>BUY NOW</Button>
                    <Button>Offer</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}

export default CoffeeCard
