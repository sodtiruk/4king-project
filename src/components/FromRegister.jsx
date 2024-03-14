import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Person from "@mui/icons-material/Person";
import { red, grey } from "@mui/material/colors";

const defaultTheme = createTheme();

export default function FromRegister({ numberPersons }) {

    // const array = ["test1", "test2", "test3"]
    const count = numberPersons
    const dataPerson = []
    for (let i = 1; i <= count; i++) {
        dataPerson.push({ firstname: `firstname${i}`, lastname: `lastname${i}`, hobby: `hobby${i}` });
    }
    console.log(dataPerson);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // log all data person
        for (let i = 1; i <= numberPersons; i++) {
            console.log({
                firstname: data.get(`firstname${i}`),
                lastname: data.get(`lastname${i}`),
                hobby: data.get(`hobby${i}`),
            });
        }

        // keep all data in array
        // put data in local Storage
        const localStorage = []
        for (let i=1; i<=numberPersons; i++){
            localStorage.push( {firstname: data.get(`firstname${i}`), lastname: data.get(`lastname${i}`), hobby: data.get(`hobby${i}`)})
        }
        console.log(localStorage);

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 3,
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: red[700] }}>
                        <Person />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        ลงทะเบียน
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        {dataPerson.map((value, index) => (
                            
                                <Grid container spacing={2} key={index}>
                                    <Grid item xs={12}>
                                        <p >คนที่ {index + 1}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name={value.firstname}
                                            required
                                            fullWidth
                                            // id="firstName"
                                            id={`firstName-${index}`} // แก้ id ให้ไม่ซ
                                            label="ชื่อ"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            // id="lastName"
                                            id={`lastName-${index}`} // แก้ id ให้ไม่ซ
                                            label="นามสกุล"
                                            name={value.lastname}
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            // id="hobby"
                                            id={`hobby-${index}`} // แก้ id ให้ไม่ซ
                                            label="งานอดิเรก"
                                            name={value.hobby}
                                            autoComplete="text"
                                        />
                                    </Grid>
                                </Grid >
                            
                        ))}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: red[700] }}
                        >
                            สุ่ม
                        </Button>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}