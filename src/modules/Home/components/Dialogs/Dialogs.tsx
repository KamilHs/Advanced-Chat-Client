import { Box, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { DialogItem } from "./DialogItem";

export enum MessageStatus {
    sent = "Sent",
    received = "Received",
    seen = "Seen",
}

export interface IDialog {
    avatar: string | null,
    username: string,
    lastMessage: {
        content: string,
        isOwn: boolean,
        status: MessageStatus
    }
}

const dialogs: IDialog[] = [
    {
        avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
        username: "Kamil Salimli",
        lastMessage: {
            content: "Salam varam",
            isOwn: true,
            status: MessageStatus.seen
        }
    },
    {
        avatar: null,
        username: "Kamil Salimli",
        lastMessage: {
            content: "Salam varam lorem ipsum dolor bla bla bla kakakakakakdolor bla bla bla kakakakakak",
            isOwn: true,
            status: MessageStatus.seen
        }
    }
];

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            maxHeight: "100%",
            overflowY: "auto"
        }
    }
));


export const Dialogs: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}> {
            dialogs.map((dialog, index) => <DialogItem key={Math.random() * (index + 1) + dialog.username} dialog={dialog} />)
        }
        </Box>
    );
}