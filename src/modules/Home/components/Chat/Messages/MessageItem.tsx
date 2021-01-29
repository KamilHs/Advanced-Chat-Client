import React from "react";
import { makeStyles, Theme, Typography, Box, Avatar } from "@material-ui/core";
import { format } from "date-fns";
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import { stringToColor, getContrastColor } from "../../../../../utils/color";
import { IMessage, MessageStatus } from "../../../../../redux/types";

interface IProp {
    message: IMessage;
    ownId: string
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
            borderRadius: `${theme.shape.borderRadius * 5}px ${theme.shape.borderRadius * 5}px 0 ${theme.shape.borderRadius * 5}px`,
        },
        notOwnBubble: {
            color: "#fff",
            backgroundColor: theme.palette.primary.main,
            borderRadius: `${theme.shape.borderRadius * 5}px ${theme.shape.borderRadius * 5}px  ${theme.shape.borderRadius * 5}px 0`,
        },
        date: {
            fontSize: "0.8rem",
            color: "grey",
        },
        ownDate: {
            marginLeft: theme.spacing(1),
            right: 0
        },
        notOwnDate: {
            position: "absolute",
            top: "100%",
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

export const Message: React.FC<IProp> = ({ message, ownId }) => {
    const classes = useStyles();
    let date = new Date(message.date);

    let bgColor: string = message.author.avatar === null
        ? stringToColor(message.author.username)
        : "";


    return (
        <Box className={[classes.message, message.author.id === ownId
            ? classes.ownMessage
            : classes.notOwnMessage].join(" ")}>
            <Box className={[classes.content, message.author.id === ownId
                ? classes.ownContent
                : classes.notOwnContent].join(" ")}>
                <Box className={[classes.avatarContainer, message.author.id === ownId
                    ? classes.ownAvatarContainer
                    : classes.notOwnAvatarContainer].join(" ")}>
                    {message.author.avatar
                        ? <Avatar
                            className={classes.avatar}
                            src={message.author.avatar}
                            alt={message.author.username}
                        />
                        : <Avatar
                            style={{
                                backgroundColor: bgColor,
                                color: getContrastColor(bgColor),
                                fontSize: "0.9rem"
                            }}
                            className={classes.avatar}>
                            {message.author.username.charAt(0)}
                        </Avatar>
                    }
                </Box>
                <Box className={classes.textContainer}>
                    <Box className={[classes.bubble, message.author.id === ownId
                        ? classes.ownBubble
                        : classes.notOwnBubble].join(" ")}>
                        <Typography variant="body1">{message.content}</Typography>
                    </Box>
                    <Box

                        display="flex"
                        justifyContent="flex-end"
                    >
                        {message.author.id === ownId &&
                            (message.status === MessageStatus.sent
                                ? <DoneIcon color="disabled" fontSize="small" />
                                : message.status === MessageStatus.received
                                    ? <DoneAllIcon color="disabled" fontSize="small" />
                                    : <DoneAllIcon color="primary" fontSize="small" />
                            )
                        }
                        <Typography className={[classes.date, message.author.id === ownId
                            ? classes.ownDate
                            : classes.notOwnDate].join(" ")} variant="subtitle1">
                            {format(date, "HH:mm")}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}