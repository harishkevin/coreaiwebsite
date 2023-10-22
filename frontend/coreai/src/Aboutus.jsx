import {Typography, Button, TextField} from '@mui/material'

function Aboutus() {
    return <>
    <div className='paddingLR flexSwitch' style={{
        display: 'flex',
        background: '#0f0c20',
        paddingBottom: '10%'
    }}>
        <div className='changeWidth mobileTopBottomSpace'>
            <div>
                {/* <Typography variant='h4' style={{
                    color: 'white',
                    fontFamily: 'Regular'
                }}>About us</Typography>
                <br /> */}
                <div style={{
                    background: 'linear-gradient(to right, #7549F2, #DF58D2, #ED787C, #FE7F21, #FFFFFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    <Typography variant='h3' style={{fontFamily: 'Regular'}}>What we offer?</Typography>
                </div>
                <br />
                <Typography variant='h6' style={{
                    color: 'white',
                    fontFamily: 'Regular'
                }}>&#x2713; Interactive Live Sessions and Recorded Sessions for Flexible Learning</Typography>
                <br />
                <Typography variant='h6' style={{
                    color: 'white',
                    fontFamily: 'Regular'
                }}>&#x2713; Internship: Gain real-world skills by working on coreai's projects</Typography>
                <br />
                <Typography variant='h6' style={{
                    color: 'white',
                    fontFamily: 'Regular'
                }}>&#x2713; Experienced instructors working in top companies</Typography>
                <br />
                <Typography variant='h6' style={{
                    color: 'white',
                    fontFamily: 'Regular'
                }}>&#x2713; One-on-one Mentorship for Placement</Typography>
            </div>
            

        </div>
        <div className='changeWidth mobileTopBottomSpace'>
            <div className='flexSwitch increaseHeightAboutUs' style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: 15
            }}>
                <div className='aboutCard' style={{
                    background: '#f4f4f4',
                    borderRadius: '30px',
                    padding: '20px',
                    height: 250
                }}>
                    
                    <center>
                        <img style={{
                            width: '80%',
                            borderRadius: 50,
                            height: 60,
                            objectFit: 'cover',
                            objectPosition: '0 1%'
                        }} src="../public/images/instructor1.jpeg" alt="" />
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>Experienced Instructor</Typography>
                        <br />
                        <Typography style={{
                    color: '#86868B',
                    fontFamily: 'Regular'
                }}>Industry-seasoned instructors drive student excellence.</Typography>
                    </center>
                </div>
                <div className='aboutCard' style={{
                    background: '#f3c7c5',
                    borderRadius: '30px',
                    padding: '20px',
                    height: 250
                }}>
                    <center>
                        <Typography variant='h6' style={{fontFamily: 'LufgaR'}}>Diverse Course Catlogue</Typography>
                        <br />
                            <Typography style={{
                        color: '#86868B',
                        fontFamily: 'Regular'
                                        }}>Diverse courses for comprehensive skill development.</Typography>
                    </center>
                </div>
                {/* <div style={{
                    background: '#b6d7fe',
                    borderRadius: '30px',
                    padding: '20px'
                }}>
                    <Typography variant='h6'>Supportive Community</Typography>
                </div> */}
            </div>
        </div>
    </div>
    </>
}

export default Aboutus