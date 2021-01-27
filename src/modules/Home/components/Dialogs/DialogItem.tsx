import React from "react";
import { Theme, Box, makeStyles, Typography, Avatar } from "@material-ui/core"

import { IDialog } from "./Dialogs";

interface IProp {
    dialog: IDialog
}

const useStyles = makeStyles((theme: Theme) => (
    {
        dialog: {
            padding: theme.spacing(1),
            cursor: "pointer",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            borderBottom: "1px solid #e9e9e9",
            "&:hover": {
                backgroundColor: "#e8e8e8"
            }
        },
        avatarContainer: {
            position: "relative",
            marginRight: theme.spacing(1)
        },
        onlineMark: {
            position: "absolute",
            width: theme.spacing(1.5),
            height: theme.spacing(1.5),
            borderRadius: "50%",
            backgroundColor: "#13ad58",
            border: "2px solid #fff",
            right: 0,
            bottom: 0
        },
        date: {
            fontSize: "0.8rem",
            color: "grey",
        },
        content: {
            fontSize: "0.9rem",
            color: "grey",
            [theme.breakpoints.up('xs')]: {
                maxWidth: "280px",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "500px",
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: "220px",
            },
            [theme.breakpoints.up('lg')]: {
                maxWidth: "200px",
            },
            display: "inline-block",
        },
        infoContainer: {
            width: "100%",
            maxWidth: "100%",
        }
    }
));


export const DialogItem: React.FC<IProp> = ({ dialog }) => {
    const classes = useStyles();
    return (
        <Box className={classes.dialog}>
            <Box className={classes.avatarContainer}>
                {dialog.lastMessage.author.avatar
                    ? <Avatar src={dialog.lastMessage.author.avatar} alt={dialog.lastMessage.author.username} />
                    : <Avatar>{dialog.lastMessage.author.username.charAt(0)}</Avatar>
                }
                {dialog.lastMessage.author.isAuthorOnline && <Box className={classes.onlineMark}></Box>}
            </Box>
            <Box className={classes.infoContainer}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    width="100%"
                >
                    <Typography variant="body1">{dialog.lastMessage.author.username}</Typography>
                    <Typography className={classes.date} variant="subtitle1">{dialog.lastMessage.date}</Typography>
                </Box>
                <Typography noWrap className={classes.content} variant="subtitle1">{dialog.lastMessage.content}</Typography>
            </Box>
        </Box>
    );
}