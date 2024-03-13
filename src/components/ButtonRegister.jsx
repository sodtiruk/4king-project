import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputNumberCandidate from './InputNumberCandidate';

function ButtonRegister() {

    const [popupRegister, setPopupRegister] = useState(false);

    const togglePopupOpen = () => {
        setPopupRegister(true)
    }

    const togglePopupClose = () => {
        setPopupRegister(false)
    }

    return (
        <>
            <React.Fragment>

                <button type="button" className="text-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:animate-ping" onClick={togglePopupOpen}>
                    REGISTER
                </button>

                <Dialog
                    open={popupRegister}
                    onClose={togglePopupClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"กรอกข้อมูลโว๊ยยยยยย"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                        <InputNumberCandidate /> 
                    </DialogContent>

                    {/* dont bring component textfield in compnent dialogcontent */}
                    <DialogActions>
                        <Button onClick={togglePopupClose}>Disagree</Button>
                        <Button onClick={togglePopupClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </>
    )
}

export default ButtonRegister