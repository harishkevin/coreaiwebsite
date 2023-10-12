import {Typography, Button, TextField} from '@mui/material'

function Login() {
    
    return <>
    <div style={{
        width: '100vw',
        background: '#0f0c20',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    }}>
        <div style={{
            background: '#6837f5',
            width: '25%',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '5%',
            paddingBottom: '5%'
        }}>
            {/* <img style={{width: '30%'}} src="../assets/student3.png" alt="" /> */}
            <br />
            <Typography variant='h5' style={{
                color: 'white',
                fontFamily: 'LufgaR'
            }}>Login in to your account</Typography>
            <br />
            <TextField style={{width: '85%'}} label="email" variant='outlined' size='small' InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}></TextField>
            <br />
            <TextField style={{width: '85%'}} label="password" variant='outlined' size='small' InputLabelProps={{style: {fontFamily: 'LufgaR', color: 'white'}}}></TextField>
            <br />
            <Button variant='contained' style={{
                 textTransform : 'none',
                 borderRadius : '50px',
                 background: '#fe7f21',
                 fontFamily: 'LufgaR',
                 boxShadow: 'none',
                 width: '85%'
            }}>Log in</Button>
            <br />
            <Typography style={{
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
            }}> <div style={{display: 'flex', justifyContent: 'space-between'}}><img style={{width: '7%'}} src="../assets/google.png" alt="" /><div style={{margin:'0 auto'}}>Continue with google</div></div></Button>
            <br />
            <Button variant='contained' style={{
                 textTransform : 'none',
                 borderRadius : '50px',
                 background: 'white',
                 fontFamily: 'LufgaR',
                 boxShadow: 'none',
                 width: '85%',
                 color: 'black'
            }}> <div style={{display: 'flex', justifyContent: 'space-between'}}><img style={{width: '7%'}} src="../assets/linkedin4.png" alt="" /><div style={{margin:'0 auto'}}>Continue with linkedin</div></div></Button>
            <br />
            <div style={{
                display: 'flex'
            }}>
                <Typography style={{
                    color: '#86868B',
                    fontFamily: 'LufgaR',
                    paddingTop: 6
                }}>Don't have an account?</Typography>
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