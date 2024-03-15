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
import { red } from "@mui/material/colors";

const defaultTheme = createTheme();

function minNumberIndex() {
    if (arguments.length === 0) {
        return []; // no arg
    }
    let minIndex = [];
    let minValue = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < minValue) {
            minIndex = [i];
            minValue = arguments[i];
        } else if (arguments[i] === minValue) {
            minIndex.push(i);
        }
    }
    return minIndex;
}

function randomChoice(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined; // array empthy
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

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
        // for (let i = 1; i <= numberPersons; i++) {
        //     console.log({
        //         firstname: data.get(`firstname${i}`),
        //         lastname: data.get(`lastname${i}`),
        //         hobby: data.get(`hobby${i}`),
        //     });
        // }
        // keep all data in array
        // put data in local Storage
        const arrayDataPerson = []
        for (let i=1; i<=numberPersons; i++){
            arrayDataPerson.push( {firstname: data.get(`firstname${i}`), lastname: data.get(`lastname${i}`), hobby: data.get(`hobby${i}`)})
        }
        console.log(arrayDataPerson);

        const storagePrachachuen = sessionStorage.getItem('prachachuen');
        const storageIntrara= sessionStorage.getItem('intrara');
        const storageKanok= sessionStorage.getItem('kanok');
        const storageBuranaphon= sessionStorage.getItem('buranaphon');

        //school choice
        let dataPrachachuen = [] // 0
        let dataIntrara = [] // 1
        let dataKanok = [] // 2
        let dataBuranaphon = [] //3

        // what if have data in storage sessiong then convert string to array 
        storagePrachachuen ? dataPrachachuen = JSON.parse(storagePrachachuen) : dataPrachachuen = []
        storageIntrara ? dataIntrara = JSON.parse(storageIntrara) : dataIntrara = []
        storageKanok ? dataKanok = JSON.parse(storageKanok) : dataKanok = []
        storageBuranaphon ? dataBuranaphon = JSON.parse(storageBuranaphon) : dataBuranaphon = [] 

        arrayDataPerson.forEach(value => {
            // find least school prachachuen intrara kanok and buranaphon
            const indexLeastSchool = minNumberIndex(dataPrachachuen.length, dataIntrara.length, dataKanok.length, dataBuranaphon.length)
            console.log("least =>", indexLeastSchool)
            
            const randomSchoolChoice = randomChoice(indexLeastSchool)
            console.log("===>", randomSchoolChoice)

            if (randomSchoolChoice ===  0) {
                dataPrachachuen.push(value)
            }else if (randomSchoolChoice === 1){
                dataIntrara.push(value) 
            }else if (randomSchoolChoice === 2){
                dataKanok.push(value) 
            }else if(randomSchoolChoice === 3) {
                dataBuranaphon.push(value)
            }

        });

        //output data
        console.log("pachachuen", dataPrachachuen);
        console.log("intrara", dataIntrara);
        console.log("kanok", dataKanok);
        console.log("buranaphon", dataBuranaphon);

        // set new sessiong storage 
        sessionStorage.setItem('prachachuen', JSON.stringify(dataPrachachuen))
        sessionStorage.setItem('intrara', JSON.stringify(dataIntrara))
        sessionStorage.setItem('kanok', JSON.stringify(dataKanok))
        sessionStorage.setItem('buranaphon', JSON.stringify(dataBuranaphon))
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