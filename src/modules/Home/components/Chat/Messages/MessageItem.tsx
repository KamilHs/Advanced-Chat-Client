import React from "react";
import { makeStyles, Theme, Typography, Box, Avatar } from "@material-ui/core";

import { IMessage } from "./Messages";

interface IProp {
    message: IMessage;
}

const useStyles = makeStyles((theme: Theme) => (
    {
        message: {
            display: "flex",
            marginBottom: theme.spacing(4),
        },
        content: {
            maxWidth: "80%",
            display: "flex",
        },
        ownContent: {
            flexDirection: "row-reverse"
        },
        notOwnContent: {
            flexDirection: "row"
        },
        ownMessage: {
            justifyContent: "flex-end",

        },
        notOwnMessage: {
            justifyContent: "flex-start",
        },
        bubble: {
            padding: theme.spacing(2),
            overflow: "hidden",
        },
        ownBubble: {
            border: "1px solid lightgrey",
            borderRadius: `${theme.shape.borderRadius * 2}px ${theme.shape.borderRadius * 2}px 0 ${theme.shape.borderRadius * 2}px`,
        },
        notOwnBubble: {
            color: "#fff",
            backgroundColor: theme.palette.primary.main,
            borderRadius: `${theme.shape.borderRadius * 2}px ${theme.shape.borderRadius * 2}px  ${theme.shape.borderRadius * 2}px 0`,
        },
        date: {
            display: "block",
            position: "absolute",
            top: "100%",
            fontSize: "0.8rem",
            color: "grey",
        },
        ownDate: {
            right: 0
        },
        notOwnDate: {
            left: 0

        },
        avatarContainer: {
            display: "flex",
            alignItems: "flex-end"
        },
        ownAvatarContainer: {
            marginLeft: theme.spacing(1)
        },
        notOwnAvatarContainer: {
            marginRight: theme.spacing(1)
        },
        avatar: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        textContainer: {
            position: "relative"
        }
    }
));

export const Message: React.FC<IProp> = ({ message }) => {
    const classes = useStyles();
    return (
        <Box className={[classes.message, message.isOwn
            ? classes.ownMessage
            : classes.notOwnMessage].join(" ")}>
            <Box className={[classes.content, message.isOwn
                ? classes.ownContent
                : classes.notOwnContent].join(" ")}>
                <Box className={[classes.avatarContainer, message.isOwn
                    ? classes.ownAvatarContainer
                    : classes.notOwnAvatarContainer].join(" ")}>
                    {message.author.avatar
                        ? <Avatar className={classes.avatar} src={message.author.avatar} alt={message.author.username} />
                        : <Avatar className={classes.avatar}>{message.author.username.charAt(0)}</Avatar>
                    }
                </Box>
                <Box className={classes.textContainer}>
                    <Box className={[classes.bubble, message.isOwn
                        ? classes.ownBubble
                        : classes.notOwnBubble].join(" ")}>
                        <Typography variant="body1">{message.content}</Typography>
                    </Box>
                    <Typography className={[classes.date, message.isOwn
                        ? classes.ownDate
                        : classes.notOwnDate].join(" ")} variant="subtitle1">{message.date}</Typography>
                </Box>
            </Box>
        </Box>
    )
}