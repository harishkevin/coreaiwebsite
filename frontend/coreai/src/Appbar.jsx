import {Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isLoadingState } from './assets/store/selectors/isLoading'
import {userEmailState} from './assets/store/selectors/userEmail'
import { userState } from './assets/store/atoms/user'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react'

function Appbar() {
    const navigate = useNavigate()
    const isLoading = useRecoilValue(isLoadingState)
    const userEmail = useRecoilValue(userEmailState)
    const setUser = useSetRecoilState(userState)
    const [menuItem, setMenuItems] = useState(false)


    const toogle = () => {
        setMenuItems(!menuItem)
    }

    if(isLoading) {
        return <></>
    }

    if(userEmail) {
        return <>
        <div className='paddingLR appBar mobileTopBottomSpace webBar'>
        <div style={{width: '10%', display: 'flex'}} onClick={() => {
                navigate('/')
            }}>
            <img style={{width: '90px'}} src='../public/images/corelogo.png' alt="" />
            <Typography className='logoTypo' variant='h5'>ai</Typography>
        </div>
        <div className='flexSwitch' style={{
            display: 'flex'
        }}>
           <div className='flexSwitch' style={{
                display: 'flex'
            }}>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/courses')
                }}>Courses</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/plan')
                }}>Our Plans</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }}>About</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/register')
                }}>Register</Button>
            </div>
            <div>
                <Button variant='contained' style={{
                        textTransform : 'capitalize',
                        borderRadius : '50px',
                        background: '#6837f5',
                        fontFamily: 'LufgaR'
                }} onClick={() => {
                    localStorage.setItem('token', null)
                    setUser({
                        isLoading: false,
                        userEmail: null
                    })
                    navigate('/')
                }}>Sign out</Button>
            </div>
        </div>
    </div>
    <div className='paddingLR appBar mobileTopBottomSpace mobileBar'>
        <div style={{width: '10%', display: 'flex'}} onClick={() => {
                navigate('/')
            }}>
            <img style={{width: '90px'}} src='../public/images/corelogo.png' alt="" />
            <Typography className='logoTypo' variant='h5'>ai</Typography>
        </div>
        <div className='flexSwitch' style={{
            display: 'flex'
        }}>
            <Button variant='contained' style={{
                background: '#fe7f21'
            }} onClick={toogle}>&#8650;</Button>
            {menuItem && (<div className='flexSwitch' style={{
                display: 'flex'
            }}>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/courses')
                }}>Courses</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/plan')
                }}>Our Plans</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }}>About</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/register')
                }}>Register</Button>
            </div>)}
            {menuItem && (<div>
                <Button variant='contained' style={{
                        textTransform : 'capitalize',
                        borderRadius : '50px',
                        background: '#6837f5',
                        fontFamily: 'LufgaR'
                }} onClick={() => {
                    localStorage.setItem('token', null)
                    setUser({
                        isLoading: false,
                        userEmail: null
                    })
                    navigate('/')
                }}>Sign out</Button>
            </div>)}
        </div>
    </div>
        </>
    } else {
        return <>
    <div className='paddingLR appBar mobileTopBottomSpace webBar'>
        <div style={{width: '10%', display: 'flex'}} onClick={() => {
                navigate('/')
            }}>
            <img style={{width: '90px'}} src='../public/images/corelogo.png' alt="" />
            <Typography className='logoTypo' variant='h5'>ai</Typography>
        </div>
        <div className='flexSwitch' style={{
            display: 'flex'
        }}>
           <div className='flexSwitch' style={{
                display: 'flex'
            }}>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/courses')
                }}>Courses</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/plan')
                }}>Our Plans</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }}>About</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/register')
                }}>Register</Button>
            </div>
            <div className='flexSwitch' style={{
                display:'flex'
            }}>
                <Button style={{
                    color: 'white',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/login')
                }}>Log in</Button>
                <Button variant='contained' style={{
                     textTransform : 'capitalize',
                     borderRadius : '50px',
                     background: '#6837f5',
                     fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/signup')
                }}>Sign up for free</Button>
            </div>
        </div>
    </div>
    <div className='paddingLR appBar mobileTopBottomSpace mobileBar'>
        <div style={{width: '10%', display: 'flex'}} onClick={() => {
                navigate('/')
            }}>
            <img style={{width: '90px'}} src='../public/images/corelogo.png' alt="" />
            <Typography className='logoTypo' variant='h5'>ai</Typography>
        </div>
        <div className='flexSwitch' style={{
            display: 'flex'
        }}>
            <Button variant='contained' style={{
                background: '#fe7f21'
            }} onClick={toogle}>&#8650;</Button>
            {menuItem && (<div className='flexSwitch' style={{
                display: 'flex'
            }}>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/courses')
                }}>Courses</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/plan')
                }}>Our Plans</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }}>About</Button>
                <Button style={{
                    color: '#86868B',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/register')
                }}>Register</Button>
            </div>)}
            {menuItem && (<div className='flexSwitch' style={{
                display:'flex'
            }}>
                <Button style={{
                    color: 'white',
                    textTransform : 'capitalize',
                    fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/login')
                }}>Log in</Button>
                <Button variant='contained' style={{
                     textTransform : 'capitalize',
                     borderRadius : '50px',
                     background: '#6837f5',
                     fontFamily: 'LufgaR'
                }} onClick={() => {
                    navigate('/signup')
                }}>Sign up for free</Button>
            </div>)}
        </div>
    </div>
    </>
    }
}

export default Appbar