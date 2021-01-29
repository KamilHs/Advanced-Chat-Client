import React from "react";
import { Box, makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import { connect, ConnectedProps } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import SpeakerNotesOffOutlinedIcon from '@material-ui/icons/SpeakerNotesOffOutlined';
import LaunchIcon from '@material-ui/icons/Launch';

import { DialogItem } from "./DialogItem";
import { IDialog } from "../../../../redux/types";
import { dialogActions } from "../../../../redux/actions";
import { RootState } from "../../../../redux/store";

const mapStateToProps = (state: RootState) => {
    return { ...state.dialog };
};
const mapDispatch = {
    fetchDialogs: dialogActions.fetchDialogs,
    setSelectedDialogId: dialogActions.setSelectedDialogId
};
const connector = connect(mapStateToProps, mapDispatch);

type PropsRedux = ConnectedProps<typeof connector>
type Props = PropsRedux;


const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            height: "100%",
            maxHeight: "100%",
            borderRight: "1px solid #d0d0d0",
            overflowY: "auto"
        },
        topSectionContainer: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(1),
        },
        textFieldContainer: {
            flexGrow: 2,
            position: "relative"
        },
        textField: {
            width: "100%",
            "& *::before,& *::after": {
                display: "none"
            },
            "& input": {
                width: "100%",
                fontSize: "0.9rem",
                padding: theme.spacing(1),
                paddingRight: theme.spacing(2),
                paddingLeft: theme.spacing(4),
                borderRadius: theme.shape.borderRadius * 2,
                color: theme.palette.secondary.main,
                border: "1px solid #c6c6c6",
                "&:focus": {
                    boxShadow: `0 0 8px 1px #c6c6c6`,
                }
            },
        },
        searchIcon: {
            position: "absolute",
            top: "50%",
            left: "0",
            marginLeft: theme.spacing(1),
            transform: "translateY(-50%)",
        },
        launchIcon: {
            marginLeft: theme.spacing(1),
            cursor: "pointer"
        },
        noDialogNotification: {
            marginTop: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        noDialogNotificationIcon: {
            fontSize: theme.spacing(10)
        },
        noDialogNotificationText: {
            marginTop: theme.spacing(1),
            color: "#b9b9b9"
        },
        spinner: {
            display: "block",
            margin: "0 auto",
            marginTop: theme.spacing(2)
        }
    }
));

const Dialogs: React.FC<Props> = ({ dialogs, selectedDialogId, fetchDialogs, setSelectedDialogId, isLoading }) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [filtered, setFiltered] = React.useState<IDialog[]>(dialogs);
    console.log(isLoading);

    const handleSubmit = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setFiltered(dialogs.filter((dialog) => (
            dialog.lastMessage.author.username
                .toLowerCase()
                .indexOf(e.target.value.toLowerCase()) !== -1)
        ))
    }, [dialogs])

    React.useEffect(() => {
        if (dialogs.length === 0) {
            fetchDialogs();
        }
        else {
            setFiltered(dialogs);
        }
    }, [dialogs, fetchDialogs]);

    return (
        <Box className={classes.container}>
            <Box className={classes.topSectionContainer}>
                <Box className={classes.textFieldContainer}>
                    <TextField
                        value={searchValue}
                        onChange={handleSubmit}
                        className={classes.textField}
                        placeholder="Search chat"
                    />
                    <SearchIcon color="disabled" fontSize="small" className={classes.searchIcon} />
                </Box>
                <LaunchIcon color="disabled" className={classes.launchIcon} />
            </Box>
            {
                isLoading
                    ? <CircularProgress color="primary" className={classes.spinner} />
                    : filtered.length !== 0
                        ? filtered.map((dialog) =>
                            <DialogItem
                                key={dialog.id}
                                dialog={dialog}
                                setSelectedDialogId={setSelectedDialogId}
                                ownId={"1"}
                                isSelected={selectedDialogId === dialog.id} />
                        )
                        : <Box className={classes.noDialogNotification}>
                            <SpeakerNotesOffOutlinedIcon color="disabled" className={classes.noDialogNotificationIcon} />
                            <Typography variant="body1" className={classes.noDialogNotificationText}>No Dialog Found</Typography>
                        </Box>
            }
        </Box>
    );
}

export default connector(Dialogs);