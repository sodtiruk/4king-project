import React, { useState } from 'react'
import { TextField } from '@mui/material'
import FromRegister from './FromRegister';

function InputNumberCandidate() {

    const [numbersPerson, setnumbersPerson] = useState(0)
    
    console.log(numbersPerson);

    const handlenumbersPerson = (event) => {
        setnumbersPerson(event.target.value)
    }

    return (
        <>
            <div className="mt-5">
                <TextField fullWidth label="จำนวนคนที่จะลงทะเบียน" id="fullWidth" color='error' value={numbersPerson} onChange={handlenumbersPerson} />
            </div>
            <FromRegister numberPersons={numbersPerson}/>

            numbersPerson = {numbersPerson}
        </>
    )
}

export default InputNumberCandidate