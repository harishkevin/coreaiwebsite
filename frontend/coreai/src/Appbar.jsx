import {Typography, Button} from '@mui/material'

function Appbar() {
    return <>
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#0f0c20',
        height: '50px',
        paddingLeft: '15%',
        paddingRight: '15%',
        height: '10vh'
    }}>
        <div>
            <Button className='logo' style={{
                textTransform: 'lowercase'
            }}>
                <Typography variant='h5' style={{color: 'white', fontFamily: 'LufgaR'}}>core.ai</Typography>
            </Button>
        </div>
        <div>
            <Button style={{
                color: '#49495b',
                textTransform : 'capitalize',
                fontFamily: 'LufgaR'
            }}>Program</Button>
            <Button style={{
                color: '#49495b',
                textTransform : 'capitalize',
                fontFamily: 'LufgaR'
            }}>Courses</Button>
            <Button style={{
                color: '#49495b',
                textTransform : 'capitalize',
                fontFamily: 'LufgaR'
            }}>About</Button>
            <Button style={{
                color: '#49495b',
                textTransform : 'capitalize',
                fontFamily: 'LufgaR'
            }}>Masterclass</Button>
        </div>
        <div>
            <Button style={{
                color: 'white',
                textTransform : 'capitalize',
                fontFamily: 'LufgaR'
            }}>Log in</Button>
            <Button variant='contained' style={{
                 textTransform : 'capitalize',
                 borderRadius : '50px',
                 background: '#6837f5',
                 fontFamily: 'LufgaR'
            }}>Sign up for free</Button>
        </div>
    </div>
    </>
}

export default Appbar