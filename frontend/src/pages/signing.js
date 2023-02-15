import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, 
    DialogActions } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { registerUser, signIn } from '../store/actions/userActions'
import { useNavigate } from "react-router-dom";



export default function Signing() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    const userReducer = useSelector(state=>state.userReducer)
    const navigate = useNavigate();

    useEffect(()=>{
        if(userReducer.loggedIn){
            setOpen(false)
            return navigate("../");
        }
        
    }, [userReducer.loggedIn])
    
    return (
        <div>
            
            <p><TextField label="e-mail" variant="outlined" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/></p>
            <p><TextField label="Hasło" variant="outlined" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/></p>
            <p>
                <Button onClick={()=>{
                    dispatch(signIn({email, password}))
                }}>
                    Zaloguj się
                </Button>
            </p>
            <p>
                <Button onClick={()=>{
                    setOpen(true)
                }}>
                    Utwórz konto
                </Button>
            </p>
            <Dialog open={open} onClose={()=>{
                setOpen(false)
            }}>
                <DialogTitle>Rejestracja</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Podaj swoje dane aby się zarejestrować
                    </DialogContentText>
                    <TextField
                        autoFocus
                        label="e-mail"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        label="Nazwa uzytkownika"
                        type="username"
                        fullWidth
                        variant="standard"
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        label="Hasło"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        label="Imię"
                        type="name"
                        fullWidth
                        variant="standard"
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        label="Nazwisko"
                        type="name"
                        fullWidth
                        variant="standard"
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        label="Telefon"
                        type="phone"
                        fullWidth
                        variant="standard"
                        value={phone}
                        onChange={(e)=>{
                            setPhone(e.target.value)
                        }}
                    />
                    <p>{userReducer.error&&userReducer.error}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{
                        setOpen(false)
                    }}>
                        Anuluj
                    </Button>

                    <Button onClick={()=>{
                        const user = {
                            email,
                            password,
                            firstName,
                            lastName,
                            phone,
                            username
                        }
                        dispatch(registerUser(user))
                    }}>
                        Zatwierdź
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
