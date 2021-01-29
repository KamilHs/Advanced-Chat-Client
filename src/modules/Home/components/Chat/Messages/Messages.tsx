import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

import { Message } from "./MessageItem";
import { messageActions } from "../../../../../redux/actions";
import { RootState } from "../../../../../redux/store";

const mapStateToProps = (state: RootState) => {
    return {
        selectedDialogId: state.dialog.selectedDialog,
        ...state.message
    }
}
const mapDispatch = {
    fetchMessagesById: messageActions.fetchMessagesById
}
const connector = connect(mapStateToProps, mapDispatch);

type PropsRedux = ConnectedProps<typeof connector>;
type Props = PropsRedux

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            position: "relative",
            padding: theme.spacing(2),
            flexGrow: 2
        },
        noChatNotification: {
            textAlign: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
        },
        noChatNotificationIcon: {
            fontSize: theme.spacing(10)
        },
        noChatNotificationText: {
            color: "#b9b9b9"
        }
    }
));

const Messages: React.FC<Props> = ({ messages, selectedDialogId, fetchMessagesById }) => {
    const classes = useStyles();
    React.useEffect(() => {
        if (selectedDialogId !== null) {
            fetchMessagesById(selectedDialogId);
        }
    }, [selectedDialogId, fetchMessagesById]);
    return (
        <Box className={classes.container}>
            {
                selectedDialogId !== null && messages.length > 0
                    ? messages.map((message) => (
                        <Message key={message.id} message={message} ownId={"1"} />
                    ))
                    :
                    <Box className={classes.noChatNotification}>
                        <ChatBubbleOutlineOutlinedIcon color="disabled" className={classes.noChatNotificationIcon} />
                        <Typography className={classes.noChatNotificationText} variant="body1">
                            {selectedDialogId === null ? "Choose a chat" : "No messages yet"}
                        </Typography>
                    </Box>
            }
        </Box>
    )
}

export default connector(Messages)