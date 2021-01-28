import React from "react";
import { Theme, Box, makeStyles, Typography, Avatar } from "@material-ui/core"
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import { stringToColor, getContrastColor } from "../../../../utils/color";
import { IDialog } from "./Dialogs";
import { MessageStatus } from "../Chat/Messages/Messages";

interface IProp {
    dialog: IDialog,
    ownId: string
}

const useStyles = makeStyles((theme: Theme) => (
    {
        dialog: {
            padding: theme.spacing(1),
            cursor: "pointer",
            borderBottom: "1px solid #e9e9e9",
            "&:hover": {
                backgroundColor: "#e8e8e8"
            }
        },
        wrapper: {
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
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
        },
        statusIcon: {
            position: "absolute",
            right: "0",
            bottom: "0"
        },
    }
));


export const DialogItem: React.FC<IProp> = ({ dialog, ownId }) => {
    const classes = useStyles();
    let bgColor: string = dialog.lastMessage.author.avatar === null
        ? stringToColor(dialog.lastMessage.author.username)
        : "";
    return (
        <Box className={classes.dialog}>
            <Box className={classes.wrapper}>
                <Box className={classes.avatarContainer}>
                    {dialog.lastMessage.author.avatar !== null
                        ? <Avatar
                            src={dialog.lastMessage.author.avatar}
                            alt={dialog.lastMessage.author.username}
                        />
                        : <Avatar
                            style={{
                                backgroundColor: bgColor,
                                color: getContrastColor(bgColor)
                            }}
                        >
                            {dialog.lastMessage.author.username.charAt(0)}
                        </Avatar>
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
                    <Typography noWrap className={classes.content} variant="subtitle1">
                        {dialog.lastMessage.content}
                    </Typography>
                </Box>
                {
                    dialog.lastMessage.author.id === ownId &&
                    (dialog.lastMessage.status === MessageStatus.sent
                        ? <DoneIcon color="disabled" className={classes.statusIcon} fontSize="small" />
                        : dialog.lastMessage.status === MessageStatus.received
                            ? <DoneAllIcon color="disabled" className={classes.statusIcon} fontSize="small" />
                            : <DoneAllIcon color="primary" className={classes.statusIcon} fontSize="small" />
                    )
                }
            </Box>
        </Box>
    );
}