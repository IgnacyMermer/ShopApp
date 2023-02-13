import { TextField } from '@mui/material'
import React, { useState } from 'react'


export default function Signing() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div>
            <p><TextField label="e-mail" variant="outlined" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/></p>
            <p><TextField label="Hasło" variant="outlined" value={password} onChange={(e)=>{
                setPassword(e.target.password)
            }}/></p>
        </div>
    )
}
