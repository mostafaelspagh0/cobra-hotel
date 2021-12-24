import {Fragment} from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import * as React from "react";
import Container from "@mui/material/Container";
import {Controller, useForm} from "react-hook-form";
import Box from "@mui/material/Box";

const SendEmailPage = () => {
    const {handleSubmit, control} = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <Fragment>
            <Container>
                <Box component={"form"} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={5}>
                        <Grid item xs={12}/>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="title"
                                control={control}
                                defaultValue=""
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        label="to"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        type="text"
                                    />
                                )}
                                rules={{
                                    required: 'title is required',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="to"
                                control={control}
                                defaultValue=""
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        label="to"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        type="email"
                                    />
                                )}
                                rules={{
                                    required: 'Email required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'invalid email address'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="Subject"
                                control={control}
                                defaultValue=""
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        label="subject"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        type="text"
                                    />
                                )}
                                rules={{
                                    required: 'subject is required',
                                }}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="body"
                                control={control}
                                defaultValue=""
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={8}
                                        placeholder="Your E-mail"
                                        resize="none"
                                        style={{
                                            width: "100%",
                                            borderRadius: "5px",
                                            padding: "10px",
                                            resize: "none"
                                        }}
                                        label="subject"
                                        required
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        type="text"
                                    />
                                )}
                                rules={{
                                    required: 'subject is required',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" type={"submit"}>
                                Send E-mail
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Fragment>


    );
}
export default SendEmailPage;