import React from "react";
import { Grid, makeStyles, Theme, Box } from "@material-ui/core";

import { Dialogs } from "./Dialogs/Dialogs";
import { Chat } from "./Chat/Chat";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 0 5px 0 #afafaf",
        [theme.breakpoints.up('xs')]: {
            maxWidth: "540px",
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: "720px",
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: "960px",
            height: "calc(100vh - 40px)",
            margin: "20px auto",
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: "1170px",
        },

    },
    h100: {
        maxHeight: "100%"
    }
}));


export const Inbox: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Grid
                container
                justify="center"
                spacing={0}
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                    lg={3}
                    className={classes.h100}
                >
                    <Dialogs />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    lg={9}
                >
                    <Chat />
                </Grid>
            </Grid>
        </Box>
    );
}