import React from "react";
import { Box, makeStyles, Theme, TextField } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MoodIcon from '@material-ui/icons/Mood';

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            borderTop: "1px solid #d0d0d0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        },
        textField: {
            width: "100%",
            "& *::before,& *::after": {
                display: "none"
            },
            "& input": {
                width: "100%",
                padding: theme.spacing(1),
                paddingLeft: theme.spacing(4),
                borderRadius: theme.shape.borderRadius,
                color: theme.palette.secondary.main,
                border: "1px solid #c6c6c6",
                "&:focus": {
                    boxShadow: `0 0 8px 1px #c6c6c6`,
                }
            },
        },
        textFieldContainer: {
            flexGrow: 2,
            marginRight: theme.spacing(1),
            position: "relative"
        },
        icon: {
            cursor: "pointer"
        },
        emojis: {
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            marginLeft: theme.spacing(0.5),
        },
        camera: {
            marginRight: theme.spacing(1)
        },
        fileInput: {
            display: "none"
        }
    }
))

export const ChatInput: React.FC = () => {
    const [message, setMessage] = React.useState<string>("");
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const handleTextChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(
            message === ""
                ? e.target.value.trim()
                : e.target.value
        );
    }, [message]);
    const handleFileOpen = React.useCallback(() => {
        if (fileInputRef.current)
            fileInputRef.current.click();
    }, []);
    const handleFileChange = React.useCallback(() => {
        if (fileInputRef.current) {
            console.log(fileInputRef.current.value)
        }
    }, []);
    const classes = useStyles();
    return (
        <form className={classes.container}>
            <Box className={classes.textFieldContainer}>
                <TextField onChange={handleTextChange} value={message} className={classes.textField} />
                <MoodIcon color="disabled" className={[classes.icon, classes.emojis].join(" ")} />
            </Box>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="camera"
                className={classes.fileInput} 
                onChange={handleFileChange}/>
            <CameraAltIcon onClick={handleFileOpen} color="primary" className={[classes.icon, classes.camera].join(" ")} />
            {
                message !== ""
                    ? <SendIcon color="primary" className={classes.icon} />
                    : <MicIcon color="primary" className={classes.icon} />
            }
        </form>
    )
}