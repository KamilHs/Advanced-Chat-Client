import React from "react";
import { Formik, Form, Field } from 'formik';
import { makeStyles, Theme, Grid, Typography, Box, Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { AUTH_ROUTES } from "../../../routes/const";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        maxWidth: "1170px",
        padding: "0 15px",
    },
    title: {
        marginBottom: theme.spacing(3)
    },
    form: {
        padding: theme.spacing(3),
        border: "1px solid " + theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius + "px"
    },
    formField: {
        width: "100%",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
    },
    formButton: {
        width: "100%",
        marginBottom: theme.spacing(2)
    }
}));

interface IValues {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}

const initialValues: IValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: ""
}

const validate = (values: IValues): Partial<IValues> => {
    const errors: Partial<IValues> = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if (!/^[a-zA-Z0-9_]*$/.test(values.username)) {
        errors.username = 'Invalid Username';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    else if (values.password.length < 6) {
        errors.password = 'Password must be minimum 6 character long';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    }
    else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password must match';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}


export const RegisterForm: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Grid
                container
                justify="center"
                spacing={1}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={5}
                >
                    <Box className={classes.form}>
                        <Typography align="center" variant="h3" paragraph >Register</Typography>
                        <Formik
                            initialValues={initialValues}
                            validate={validate}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    alert(JSON.stringify(values, null, 2));
                                }, 500);
                            }}
                        >
                            {({ submitForm, isSubmitting }) => (
                                <Form>
                                    <Field
                                        type="email"
                                        name="email"
                                        label="Email"
                                        className={classes.formField}
                                        component={TextField}
                                    />
                                    <Field
                                        type="text"
                                        name="username"
                                        label="Username"
                                        className={classes.formField}
                                        component={TextField}
                                    />
                                    <Field
                                        type="password"
                                        name="password"
                                        label="Password"
                                        className={classes.formField}
                                        component={TextField}
                                    />
                                    <Field
                                        type="password"
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        className={classes.formField}
                                        component={TextField}
                                    />
                                    {isSubmitting && <LinearProgress />}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                        className={classes.formButton}
                                    >
                                        Sign Up
                                    </Button>
                                    <Link to={AUTH_ROUTES.LOGIN}>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            className={classes.formButton}
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

