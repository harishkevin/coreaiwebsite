import {Typography, Button, TextField} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSetRecoilState} from 'recoil';
import {userState} from './assets/store/atoms/user.js'

// const host = window.location.host
const host = 'localhost:3000'


function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const setUser = useSetRecoilState(userState)
    
    return <>
    <div style={{
        width: '100vw',
        background: '#0f0c20',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    }}>
        <div className='enrollCard' style={{
            background: '#6837f5',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '5%',
            paddingBottom: '5%'
        }}>
            {/* <img style={{width: '30%'}} src="./src/assets/images/student3.png" alt="" /> */}
            <br />
            <Typography variant='h5' style={{
                color: 'white',
                fontFamily: 'LufgaR'
            }}>Log in to your account</Typography>
            <br />
            <TextField style={{width: '85%'}} label="email" variant='outlined' size='small' type='text' InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}} onChange={(e)=>{
                setUsername(e.target.value)
            }}></TextField>
            <br />
            <TextField style={{width: '85%'}} label="password" variant='outlined' size='small' type='password' InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}} onChange={(e)=>{
                setPassword(e.target.value)
            }}></TextField>
            <br />
            <br />
            <Button variant='contained' style={{
                 textTransform : 'none',
                 borderRadius : '50px',
                 background: '#fe7f21',
                 fontFamily: 'LufgaR',
                 boxShadow: 'none',
                 width: '85%'
            }} onClick={()=>{
                fetch(`http://${host}/user/login`,{
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res) =>{
                res.json().then((data) =>{
                    console.log(data)
                    localStorage.setItem('token', data.token)
                    setUser({
                        isLoading: false,
                        userEmail: username
                    })
                    navigate('/')
                })
            })
            }}>Log in</Button>
            <br />
            {/* <Typography style={{
                    color: '#86868B',
                    fontFamily: 'LufgaR',
                    paddingTop: 6
                }}>or</Typography>
            <br />
            <Button variant='contained' style={{
                 textTransform : 'none',
                 borderRadius : '50px',
                 background: 'white',
                 fontFamily: 'LufgaR',
                 boxShadow: 'none',
                 width: '85%',
                 color: 'black'
            }}> <div style={{display: 'flex', justifyContent: 'space-between'}}><img style={{width: '7%'}} src="./src/assets/images/google.png" alt="" /><div style={{margin:'0 auto'}}>Continue with google</div></div></Button>
            <br />
            <Button variant='contained' style={{
                 textTransform : 'none',
                 borderRadius : '50px',
                 background: 'white',
                 fontFamily: 'LufgaR',
                 boxShadow: 'none',
                 width: '85%',
                 color: 'black'
            }}> <div style={{display: 'flex', justifyContent: 'space-between'}}><img style={{width: '7%'}} src="./src/assets/images/linkedin4.png" alt="" /><div style={{margin:'0 auto'}}>Continue with linkedin</div></div></Button>
            <br /> */}
            <div style={{
                display: 'flex'
            }}>
                <Typography style={{
                    color: '#86868B',
                    fontFamily: 'LufgaR',
                    paddingTop: 6
                }}>Don't an account?</Typography>
                <Button style={{
                    textTransform: 'capitalize',
                    color: '#fe7f21'
                }}>Sign up</Button>
            </div>
        </div>
    </div>
    </>
}

export default Login