import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'

function InputNumberCandidate() {

    const [count, setCount] = useState(0)
    
    console.log(count);

    const handleCount = (event) => {
        setCount(event.target.value)
    }

    return (
        <>
            <Box component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off" 
            >
                <TextField fullWidth label="จำนวนคนที่จะลงทะเบียน" id="fullWidth" color='error' value={count} onChange={handleCount}/>
            </Box>
            count = {count}
        </>
    )
}

export default InputNumberCandidate