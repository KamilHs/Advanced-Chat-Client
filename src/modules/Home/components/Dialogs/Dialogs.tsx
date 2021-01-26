import { Box, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { DialogItem } from "./DialogItem";
import { IMessage, MessageStatus } from "../Chat/Messages/Messages";
import { format } from 'date-fns'


export interface IDialog {
    lastMessage: IMessage
}

const dialogs: IDialog[] = [
    {
        lastMessage: {
            content: "Salam varam",
            isOwn: true,
            status: MessageStatus.seen,
            date: format(new Date(1611676402437 - 10000000), "HH:mm"),
            author: {
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
                username: "Kamil Salimli",
            }
        }
    },
    {
        lastMessage: {
            content: "Salam varaasdddddddddddsdsdsdddasdasdsadsadsadasdsadasdadasdasdadasdm",
            isOwn: true,
            status: MessageStatus.seen,
            date: format(new Date(1611676402437 - 10000000), "HH:mm"),
            author: {
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
                username: "Kamil Salimli",
            }
        }
    },
];

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            height: "100%",
            maxHeight: "100%",
            borderRight: "1px solid #d0d0d0",
            overflowY: "auto"
        }
    }
));


export const Dialogs: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}> {
            dialogs.map((dialog, index) => <DialogItem key={Math.random() * (index + 1) + dialog.lastMessage.author.username} dialog={dialog} />)
        }
        </Box>
    );
}